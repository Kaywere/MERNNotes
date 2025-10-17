import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dialog from "./dialog";
import toast from "react-hot-toast";
const EditDialog = ({
  isOpen,
  onClose,
  title,
  onConfirm,
  initialTitle,
  initialContent,
  confirmText,
  cancelText,
}) => {
  const [editTitle, setEditTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setEditTitle(initialTitle || "");
    setContent(initialContent || "");
  }, [initialTitle, initialContent]);

  const handleSave = () => {
    // Validation
    if (!editTitle.trim()) {
      toast.error("Title cannot be empty");
      return;
    }
    if (!content.trim()) {
      toast.error("Content cannot be empty");
      return;
    }
    if (editTitle === initialTitle && content === initialContent) {
      toast.error("No changes made!");
      return;
    }

    onConfirm(editTitle, content);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold text-center text-black">{title}</h2>
        <input className="text-black border-2 border-black rounded-md p-2"
          type="text"
          placeholder="Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
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

export default EditDialog;
