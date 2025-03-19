import React from "react";
import { MdEmail } from "react-icons/md";

const EmailButton = () => {
  const email = "harshitarajoria02@gmail.com"; // Replace with your email

  return (
    <a
      href={`mailto:${email}`}
      className="fixed bottom-6 left-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
    >
      <MdEmail className="text-3xl" />
    </a>
  );
};

export default EmailButton;
