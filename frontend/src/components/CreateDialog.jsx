import React from "react";
import { useState, useEffect } from "react";
import Dialog from "./Dialog.jsx";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setCreateTitle("");
      setContent("");
      setLoading(false);

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
    setLoading(true);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4">
        <fieldset className="fieldset bg-base-200  border-neutral-500/50 rounded-box w-full border p-4">
          <legend className="fieldset-legend text-xl font-bold bg-base-200 rounded-box border-transparent p-2">{title}</legend>

          <label className="label">title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter title"
            value={createTitle}
            onChange={(e) => setCreateTitle(e.target.value)}
          />

          <label className="label">Content</label>
          <textarea
            type="text"
            className="textarea w-full"
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className=" justify-end flex gap-4 mt-4">
            <button className="btn btn-dash  btn-secondary" onClick={onClose}>
              {cancelText}
            </button>{" "}
            <button
              className="btn btn-ghost border-neutral-500/80 btn-primary"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? <div className="flex items-center gap-2"> <p className="">
              Creating note...
            </p>
            <span className="loading loading-spinner "> </span></div> : confirmText}
            </button>
          </div>
        </fieldset>
      </div>
    </Dialog>
  );
};

export default CreateDialog;
