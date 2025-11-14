import React from "react";
import { ThemeDropdown } from "./ThemeContext";
import { PlusIcon, TrashIcon } from "lucide-react";

const NavBar = ({ onCreateClick, onAllDeleteClick }) => {
  return (
    <header className="bg-bass-800 border-b border-neutral-500/50">
      <div className="mx-auto max-w-7xl p-4 ">
        <div className="flex justify-between items-center  ">
          <h1 className="text-4xl font-bold text-primary font-sans tracking-tight">
            Note App فيصل الزهراني
          </h1>
          <ThemeDropdown />
          <div className="grid lg:flex justify-items-end gap-2 grid-cols-1 md:grid-cols-2">
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
