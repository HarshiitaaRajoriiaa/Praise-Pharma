import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-6 mb-20 ">
      <div  className="text-center mb-5">
        <h2 className="text-5xl font-bold text-lime-600">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-3">SEND US A MESSAGE</h2>
          <p className="mb-4 text-gray-600">
            Send us your query, we will revert back to you.
          </p>

          <form className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-semibold">FIRST NAME</span>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold">YOUR EMAIL</span>
              <input
                type="email"
                className="w-full p-2 border rounded mt-1"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold">COMPANY</span>
              <input type="text" className="w-full p-2 border rounded mt-1" />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold">MESSAGE</span>
              <textarea
                className="w-full p-2 border rounded mt-1"
                rows="4"
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded"
            >
              Send
            </button>
          </form>

          <p className="mt-4 text-purple-700 italic font-semibold">
            Mr. Idaytali Khanapure. Regional Business Manager
          </p>
          <p className="font-bold text-lg mt-2">
            H.Q: PUNE. CONTACT NO: 09552940446
          </p>
          <p>Mr. Laxmidass Narashima, Regional Business Manager</p>
          <p>H.Q: Hyderabad Contact No: 9705100134</p>
        </div>

        {/* Right Section: Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-3">GET IN TOUCH!</h2>
          <hr className="mb-4" />

          <p className="text-gray-700">
            <span className="font-bold">Address:</span> BLOCK NO:1, PAUL
            WAREHOUSE, S.NO:222/6, DHANGAR WASTI, MAHATMA PHULE NAGAR, URULI
            DEVACHI, TAL. HAVELI, DIST. PUNE, MAHARASHTRA, INDIA. 412308
          </p>

          <p className="mt-2 text-gray-700">
            <span className="font-bold">Telephone:</span> +91.937.215.8480
          </p>

          <p className="mt-2 text-gray-700">
            <span className="font-bold">E-mail:</span>{" "}
            <a href="mailto:contact@praisepharma.com" className="text-blue-600">
              contact@praisepharma.com
            </a>
          </p>

          <p className="mt-4 text-red-600 font-bold">
            MR. JAYAKUMAR PAUL. MANAGING DIRECTOR
          </p>
          <p>Mrs. Malgiga Jayakumar. Director</p>

          <p className="mt-4 text-yellow-600 font-bold italic">
            MR. RAJU V GOPNARAYAN. ZONAL BUSINESS MANAGER
          </p>
          <p>H.Q: Akola Contact No: 09011921162</p>

          <p className="mt-4 text-green-600 font-bold italic">
            MR. ATUL MISHRA. REGIONAL BUSINESS MANAGER
          </p>
          <p>H.Q: Bhopal, 9406848807</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
