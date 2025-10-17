import React from "react";
//import noteForm from "./NoteForm";
import { PenIcon, TrashIcon } from "lucide-react";
const NoteCard = ({ note , onDeleteClick, onEditClick }) => {




  return (
    <>
      <div className="card card-border backdrop-brightness-125 shadow w-96">
        <div className="card-body">
          <h2 className="card-title">{note.title}</h2>
          <p>{note.content}</p>
          <div className="card-actions justify-end">
            <p className="text-sm text-gray-500">{note.createdAt}</p>
            
            <div className="btn btn-error " onClick={() => onDeleteClick(note)}>
              <TrashIcon className="size-4" />
            </div>
            
            <div className="btn btn-primary " onClick={() => onEditClick(note)}>
              <PenIcon className="size-4" />
            </div>
          </div>
        </div>
      </div>
  

    </>
  );
};

export default NoteCard;
