import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      access_key: "b486f9ed-41b4-4e24-b915-ed7c123adb24",
    };
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message: " + result.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="h-screen bg-black text-white flex flex-col items-center mb-10  ">
      <h2 className="text-4xl font-extrabold text-[#be95c4] mb-6 text-center">
        Contact <span className="text-white">Me</span>
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#e0b1cb] text-3xl" />
            <p className="text-lg">Davangere, Karnataka, India</p>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaEnvelope className="text-[#e0b1cb] text-3xl" />
            <p className="text-lg underline">aliyabanu849@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaPhoneAlt className="text-[#e0b1cb] text-3xl" />
            <p className="text-lg underline">9980856150</p>
          </div>
        </div>

        <form
          className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="p-3 text-lg w-full bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-[#e0b1cb]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 w-full text-lg bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-[#e0b1cb]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 w-full text-lg bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-[#e0b1cb]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-3 w-full text-lg bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-[#e0b1cb]"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Write Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-4 p-3 w-full text-lg bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-[#e0b1cb]"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="mt-4 w-full bg-[#e0b1cb] text-black font-bold py-2 text-lg rounded-2xl cursor-pointer hover:bg-[#be95c4] transition"
          />
        </form>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="bg-[#e0b1cb] text-black font-bold py-2 px-8 text-lg rounded-2xl hover:bg-[#be95c4] transition"
        >
          Home
        </Link>
      </div>
    </section>
  );
}

export default Contact;
