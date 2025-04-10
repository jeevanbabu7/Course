import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../toast-fix.css"; // Custom CSS to fix toast z-index issues

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
      toast.error("All fields are required!", { position: "top-center" });
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

      toast.success("Form submitted successfully!", { position: "top-center" });

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.", { position: "top-center" });
    }
  };

  return (
    <div className="flex flex-col items-center h-screen mt-16 w-full z-10">
      <div className="w-full py-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Course Registration
        </h2>
        <div className="text-center mb-2">
          <span className="bg-yellow-500/30 text-slate-800 font-semibold px-4 py-1 rounded-lg inline-block">
            April/May (Hybrid Mode)
          </span>
        </div>
        <p className="text-gray-400 text-lg mb-4">
          Enroll now and start your learning journey!
        </p>
        <p className="text-red-600 font-medium mb-6">
          Registration ends on 20th April 2025
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-900/90 backdrop-blur-md border border-gray-700/50 p-8 rounded-xl shadow-xl space-y-5"
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }}
        toastStyle={{ zIndex: 9999 }}
      />
    </div>
  );
};

export default Form;