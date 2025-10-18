import React from "react";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black/50 shadow"
      onClick={onClose}
    >
      <div
        className=" rounded-lg max-w-md w-full mx-4 "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
