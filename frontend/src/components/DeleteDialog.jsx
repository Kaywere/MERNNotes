import React from "react";
import Dialog from "./dialog";

const DeleteDialog = ({
  isOpen,
  onClose,
  title,
  message,
  onConfirm,
  confirmText,
  cancelText,
}) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold text-center text-red-500">{title}</h2>
        <p className="text-black text-lg  text-center ">{message}</p>
        <div className="flex gap-4">
        <button className="btn btn-secondary" onClick={onClose}>
            {cancelText}
          </button>
          <button className="btn btn-primary" onClick={onConfirm}>
            {confirmText}
          </button>

        </div>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
