import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <a
        className="absolute z-50 left-4 top-4 opacity-90 hover:opacity-100 text-black border-2 font-semibold border-black rounded-3xl px-4 py-1 transition duration-300 ease-in-out"
        href="/"
      >
        Back
      </a>
      {/* Left side: Form content */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-8 bg-white text-gray-800">
        <div className="w-full max-w-lg">
          <h2 className="text-4xl font-bold my-6 text-left md:text-left">
            Get In Touch With Us
          </h2>
          <p className="mb-6 text-left text-lg">
            Contact us about anything related to our company or services. We'll
            do our best to get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="3"
                placeholder="Your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430] text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 h-screen md:w-1/2 hidden self-center  md:block">
        <img
          src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg"
          alt="Contact Us"
          className="object-cover w-full h-full"
        />
      </div>
    </main>
  );
};

export default ContactUs;
