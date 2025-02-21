import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authClient from '../lib/googleSheets.js';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
      toast.error('All fields are required!', { position: 'top-left' });
      return;
    }

    toast.success('Form submitted successfully!', { position: 'top-left' });

    setFormData({
      name: '',
      phone: '',
      email: '',
    });

    try {
        const { name, phone, email } = formData;
        const row = [name, phone, email];
        const googleSheets = await authClient();
        
        const spreadsheetId = '13-nTFfwxW_E8Jw-7hL7Ik8_aPwZt3gUjLT3P-pLkjx8';
    
    
        const getData = await googleSheets.spreadsheets.values.get({
          spreadsheetId,
          range: 'Sheet1',
        });
    
        const existingData = getData.data.values || [];
    
        const emailExists = existingData.some((row) => row[1] === email);
    
        if (emailExists) {
          return res.status(400).send({ ok: false, message: 'Email already exists' });
        }
    
        await googleSheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'Sheet1',
          valueInputOption: 'RAW',
          insertDataOption: 'INSERT_ROWS',
          resource: {
            values: [row],
          },
        });
    
      } catch (error) {
        console.error('Error appending data:', error.response?.data || error);
 
      }
  };

  return (
    <div className="flex flex-col items-center  h-screen mt-16 w-full z-50">
      <div className="w-full py-6 flex flex-col items-center">
         <h2 className="text-3xl font-bold text-white mb-4">Course Registration</h2>
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
