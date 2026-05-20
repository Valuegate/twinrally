import React from "react";

const AuthModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0A1630] text-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default AuthModal;
