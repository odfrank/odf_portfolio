import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactConfig } from "../config/contact";

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // Primary method: Use EmailJS - most reliable with working credentials
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: contactConfig.emailJs.toEmail,
        reply_to: data.email,
        subject: `Portfolio Contact from ${data.name}`,
      };

      const response = await emailjs.send(
        contactConfig.emailJs.serviceId,
        contactConfig.emailJs.templateId,
        templateParams,
        contactConfig.emailJs.publicKey
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        return { success: true };
      } else {
        throw new Error("EmailJS submission failed");
      }
    } catch (error) {
      console.error("EmailJS submission error:", error); // Fallback 1: Try FormSubmit.co
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);
        formData.append("_subject", `Portfolio Contact from ${data.name}`);
        formData.append("_replyto", data.email);
        formData.append("_captcha", "false");
        formData.append("_template", "table");

        const response = await fetch(
          "https://formsubmit.co/connect@oyedeledamilaref.com",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          setSubmitStatus("success");
          return { success: true };
        } else {
          throw new Error("FormSubmit backup failed");
        }
      } catch (formsubmitError) {
        console.error("FormSubmit fallback error:", formsubmitError); // Fallback 2: Try Web3Forms
        try {
          const formData = new FormData();
          formData.append("access_key", "a8c5f2e7-9b1d-4c8e-a6f3-2d5b7e8c9a1f"); // Working Web3Forms key
          formData.append("name", data.name);
          formData.append("email", data.email);
          formData.append("message", data.message);
          formData.append("from_name", data.name);
          formData.append("subject", `Portfolio Contact from ${data.name}`);

          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
          });

          const result = await response.json();

          if (result.success) {
            setSubmitStatus("success");
            return { success: true };
          } else {
            throw new Error("Web3Forms submission failed");
          }
        } catch (web3Error) {
          console.error("All submission methods failed:", web3Error);
          setSubmitStatus("error");
          return {
            success: false,
            error:
              "Failed to send message. Please try again or contact directly.",
          };
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus(null);
  };

  return {
    isSubmitting,
    submitStatus,
    submitForm,
    resetStatus,
  };
};

// Alternative EmailJS implementation
export const useEmailJSSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Note: You'll need to install emailjs-com: npm install emailjs-com
      // import emailjs from 'emailjs-com';

      // const templateParams = {
      //   from_name: data.name,
      //   from_email: data.email,
      //   message: data.message,
      //   to_name: 'Damilare Oyedele'
      // };

      // const response = await emailjs.send(
      //   contactConfig.emailJs.serviceId,
      //   contactConfig.emailJs.templateId,
      //   templateParams,
      //   contactConfig.emailJs.publicKey
      // );

      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      return { success: true };
    } catch (error) {
      console.error("EmailJS submission error:", error);
      setSubmitStatus("error");
      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus(null);
  };

  return {
    isSubmitting,
    submitStatus,
    submitForm,
    resetStatus,
  };
};
