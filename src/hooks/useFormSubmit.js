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
      // First attempt: Try EmailJS if properly configured
      if (
        contactConfig.emailJs.serviceId !== "service_portfolio" &&
        contactConfig.emailJs.templateId !== "template_portfolio" &&
        contactConfig.emailJs.publicKey !== "portfolio_public_key"
      ) {
        // EmailJS is properly configured, use it
        const templateParams = {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: contactConfig.emailJs.toEmail,
          subject: `Portfolio Contact from ${data.name}`,
        };

        await emailjs.send(
          contactConfig.emailJs.serviceId,
          contactConfig.emailJs.templateId,
          templateParams,
          contactConfig.emailJs.publicKey
        );

        setSubmitStatus("success");
        return { success: true };
      } else {
        // EmailJS not configured, use mailto fallback
        const subject = encodeURIComponent(
          `Portfolio Contact from ${data.name}`
        );
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        const mailtoLink = `mailto:${contactConfig.emailJs.toEmail}?subject=${subject}&body=${body}`;

        // Open the user's default email client
        window.open(mailtoLink, "_blank");

        setSubmitStatus("success");
        return { success: true };
      }
    } catch (error) {
      console.error("Form submission error:", error);

      // Fallback to mailto if EmailJS fails
      try {
        const subject = encodeURIComponent(
          `Portfolio Contact from ${data.name}`
        );
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        const mailtoLink = `mailto:${contactConfig.emailJs.toEmail}?subject=${subject}&body=${body}`;

        window.open(mailtoLink, "_blank");
        setSubmitStatus("success");
        return { success: true };
      } catch (mailtoError) {
        console.error("Mailto fallback error:", mailtoError);
        setSubmitStatus("error");
        return { success: false, error: error.message };
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
