import React from "react";
import { formatDate } from "../lib/util";
import { PenIcon, TrashIcon } from "lucide-react";
const NoteCard = ({ note , onDeleteClick, onEditClick }) => {




  return (
    <>
      <div className="card card-border backdrop-brightness-125 shadow w-96 ">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl font-bold justify-center ">{note.title}</h2>
          <div className=" bg-black/20 p-4 rounded-md justify-end mt-2 break-words"><p >{note.content}</p></div>
          
          <div className="card-actions justify-end ">
            <p className="text-sm text-gray-500 mt-2">{formatDate(note.createdAt)}</p>
            
            <div className="btn btn-ghost btn-error " onClick={() => onDeleteClick(note)}>
              <TrashIcon className="size-4" />
            </div>
            
            <div className="btn btn-ghost btn-primary " onClick={() => onEditClick(note)}>
              <PenIcon className="size-4" />
            </div>
          </div>
        </div>
      </div>
  

    </>
  );
};

export default NoteCard;
