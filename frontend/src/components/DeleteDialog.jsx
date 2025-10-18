import React from "react";
import Dialog from "./dialog";
import { useState, useEffect } from "react";
const DeleteDialog = ({
  isOpen,
  onClose,
  title,
  message,
  onConfirm,
  confirmText,
  cancelText,
}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setLoading(false);

    }
  }, [isOpen]);
  const handleOnConfirm = () => {
    onConfirm();
    setLoading(true);
  };
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4">
      <fieldset className="fieldset bg-base-200 border-red-500/20 rounded-box w-full border p-4">
      <legend className="fieldset-legend text-xl font-bold text-red-500 bg-base-200 rounded-box border-transparent p-2">{title}</legend>
        <p className=" text-lg  text-center mt-2">{message}</p>
        <div className=" justify-end flex gap-4 mt-4">
        <button className="btn btn-dash" onClick={onClose}>
            {cancelText}
          </button>
          <button className="btn btn-ghost btn-secondary border-red-500" onClick={handleOnConfirm} disabled={loading}>
            {loading ? <div className="flex items-center gap-2"> <p className="">
              Deleting note...
            </p>
            <span className="loading loading-spinner "> </span></div> : confirmText}
          </button>
        
        </div>
        </fieldset>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
