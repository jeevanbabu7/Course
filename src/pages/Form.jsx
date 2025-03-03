import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import axios from "axios"; // axios v0.21.1
import sgMail from "@sendgrid/mail"; 
import emailjs from "emailjs-com";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // async function validateEmail(email) {
  //   const apiKey = import.meta.env.VITE_MAILGUN_API_KEY ; // Replace with your Mailgun API key
  //   const url = `https://api.mailgun.net/v4/address/validate?address=${email}`;

  //   try {
  //     const response = await axios.get(url, {
  //       auth: {
  //         username: "api",
  //         password: apiKey,
  //       },
  //     });
  //     return response.data.is_valid;
  //   } catch (error) {
  //     console.error("Error validating email:", error);
  //     return false;
  //   }
  // }

  // async function sendSimpleMessage(userEmail, userName) {
  //   const mailgun = new Mailgun(FormData);
  //   const mg = mailgun.client({
  //     username: "api",
  //     key: apikey,
  //   });

  //   try {
  //     const data = await mg.messages.create(
  //       "sandbox73a6e97a44aa40a0b4e6704e9f767b91.mailgun.org",
  //       {
  //         from: "Mailgun Sandbox <postmaster@sandbox73a6e97a44aa40a0b4e6704e9f767b91.mailgun.org>",
  //         to: userEmail, // Send email to the entered user email
  //         subject: `Hello ${userName}`,
  //         text: `Hi ${userName},\n\nThank you for registering for the course! We will get back to you soon.\n\nBest Regards,\nCourse Team`,
  //       }
  //     );

  //     console.log("Email Sent:", data);
  //     return data;
  //   } catch (error) {
  //     console.log("Error sending email:", error);
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("All fields are required!", { position: "top-left" });
      return;
    }

    // const isEmailValid = await validateEmail(formData.email);
    // if (!isEmailValid) {
    //   toast.error("Invalid email address!", { position: "top-left" });
    //   return;
    // }

    toast.success("Form submitted successfully!", { position: "top-left" });

    try {
      const response = await emailjs.send(
        "service_0ucc7pi",  // Replace with your EmailJS Service ID
        "template_wdaz7b8", // Replace with your EmailJS Template ID
        {
          from_name: "Jeevan",
          to_name: "test",
          to_email: formData.email,
          message: "Hello! This is a test email from my frontend app.",
        },
        "S0p9-eY2NRlT1ZAwC" // Replace with your EmailJS Public Key
      );
  
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Failed to send email:", error);
    }

    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="flex flex-col items-center h-screen mt-16 w-full z-50">
      <div className="w-full py-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Course Registration
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Enroll now and start your learning journey!
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Full Name*"
            className="bg-gray-800 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.name}
            required
          />

          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            className="bg-gray-800 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.phone}
            required
          />

          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="nb-email"
            placeholder="Email ID*"
            className="bg-gray-800 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.email}
            required
          />

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-md w-full transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;