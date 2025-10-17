import React from "react";

import { PlusIcon, TrashIcon } from "lucide-react";

const NavBar = ({ onCreateClick, onAllDeleteClick }) => {
  return (
    <header className="bg-bass-300 border-b black-border border-bass-content/20">
      <div className="mx-auto max-w-6xl p-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary font-sans tracking-tight">
            Note App
          </h1>
          <div className="flex items-center gap-4">
            <button className='btn btn-error' onClick={onAllDeleteClick}>
              <TrashIcon className="size-5" />
              <span>Delete All</span>
            </button>
            <button className='btn btn-primary' onClick={onCreateClick}>
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
