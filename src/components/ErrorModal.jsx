// src/components/Modal.js
import React, { useEffect, useState } from "react";

const ErrorModal = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onClose();
      }, 2000); // Wait for the opacity transition to complete
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" bg-red-500 p-4 opacity-80 mb-[500px] rounded-md">
        <p className="text-center text-white text-[20px] font-bold ">{message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
