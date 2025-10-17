import React from "react";
import { useState, useEffect } from "react";
import Dialog from "./dialog";
import toast from "react-hot-toast";

const CreateDialog = ({
  isOpen,
  onClose,
  title,
  onConfirm,
  confirmText,
  cancelText,
}) => {
  const [createTitle, setCreateTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setCreateTitle("");
      setContent("");
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!createTitle.trim()) {
      toast.error("Title cannot be empty");
      return;
    }
    if (!content.trim()) {
      toast.error("Content cannot be empty");
      return;
    }
    onConfirm(createTitle, content);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold text-center text-black">{title}</h2>
        <input className="text-black border-2 border-black rounded-md p-2"
          type="text"
          placeholder="Title"
          value={createTitle}
          onChange={(e) => setCreateTitle(e.target.value)}
        />
        <input className="text-black border-2 border-black rounded-md p-2"
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex gap-4">
        <button className="btn btn-secondary" onClick={onClose}>
            {cancelText}
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            {confirmText}
          </button>

        </div>
      </div>
    </Dialog>
  );
};

export default CreateDialog;
