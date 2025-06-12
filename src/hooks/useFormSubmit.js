import { useState } from "react";
import { contactConfig } from "../config/contact";

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Formspree for form submission
      const response = await fetch(contactConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _replyto: data.email,
          _subject: `Portfolio Contact from ${data.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        return { success: true };
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
