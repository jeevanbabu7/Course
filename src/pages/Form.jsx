import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // axios v0.21.1

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("All fields are required!", { position: "top-left" });
      return;
    }

    try {
      // Sheety API integration
      const url = 'https://api.sheety.co/b527f4b56a4193701d91e4f20980f0cb/iotCourceReg/sheet1';
      const body = {
        sheet1: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        }
      };

      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      
      const json = await response.json();
      console.log("Form submitted:", json.sheet1);
      
      toast.success("Form submitted successfully!", { position: "top-left" });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.", { position: "top-left" });
    }
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