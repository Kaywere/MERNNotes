import React from "react";
import NavBar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import RaitLimitedUI from "../components/RaitLimitedUI";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import DeleteDialog from "../components/DeleteDialog";
import EditDialog from "../components/EditDialog";
import CreateDialog from "../components/CreateDialog";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isAllTrashOpen, setIsAllTrashOpen] = useState(false);
 
  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      console.log(res.data);
      setNotes(res.data);
      setIsRateLimited(false);
    } catch (error) {
      console.log("Error fetching notes");
      console.log(error);
      if (error.response?.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const onDeleteClick = (note) => {
    setNoteToDelete(note);
    setIsTrashOpen(true);
  };

  const handleTrashClose = () => {
    setIsTrashOpen(false);
    setNoteToDelete(null);
  };

  const handleTrashConfirm = async () => {
    try {
      await api.delete(`/notes/${noteToDelete._id}`);
      toast.success("Note Deleted Successfully");
      setNotes(notes.filter((note) => note._id !== noteToDelete._id));
    } catch (error) {
      console.log("Error deleting note");
      console.log(error);
      toast.error("Error deleting note");
    }
    console.log("Note Deleted Successfully");
    setIsTrashOpen(false);
  };

  const onEditClick = (note) => {
    setNoteToEdit(note);
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
    setNoteToEdit(null);
  };

  const handleEditConfirm = async (title, content) => {
    try {
      await api.put(`/notes/${noteToEdit._id}`, {
        title,
        content,
      });
      toast.success("Note Edited Successfully");
      setNotes(
        notes.map((note) =>
          note._id === noteToEdit._id ? { ...note, title, content } : note
        )
      );
    } catch (error) {
      console.log("Error editing note");
      console.log(error);
      toast.error("Error editing note");
    }
    console.log("Note Edited Successfully");
    setIsEditOpen(false);
  };

  const onCreateClick = () => {
    setIsCreateOpen(true);
  };

  const handleCreateClose = () => {
    setIsCreateOpen(false);
  };

  const handleCreateConfirm = async (title, content) => {
    try {
      const res = await api.post(`/notes`, {
        title,
        content,
      });
      toast.success("Note Created Successfully");
      setNotes([res.data, ...notes]);
    } catch (error) {
      console.log("Error creating note");
      console.log(error);
      toast.error("Error creating note");
    }
    setIsCreateOpen(false);
  };

  const onAllDeleteClick = () => {
    setIsAllTrashOpen(true);
  };
  const handleAllTrashClose = () => {
    setIsAllTrashOpen(false);
  };
  const handleAllTrashConfirm = async () => {
    try {
      if (notes.length > 0) {
        await api.delete(`/notes`);
        toast.success("Note Deleted Successfully");
        setNotes([]);
      } else {
        toast.error("Notes are empty! Add more Notes");
      }
    } catch (error) {
      console.log("Error deleting note");
      console.log(error);
      toast.error("Error deleting notes");
    } finally {
      setIsAllTrashOpen(false);
    }
  };

  return (
    <div class="min-h-screen">
      <NavBar
        onCreateClick={onCreateClick}
        onAllDeleteClick={onAllDeleteClick}
      />
      {isRateLimited && <RaitLimitedUI />}

      <div className="max-w-7xl  mx-auto  px-4 mt-6">
        {loading && (
          <div className="max-w-7xl mx-auto flex justify-center items-center px-4 mt-6">
            <p className="text-center text-xl font-bold  ">
              Retrieving notes...
            </p>
            <span className="loading loading-spinner loading-xl"> </span>
          </div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onDeleteClick={onDeleteClick}
                onEditClick={onEditClick}
              />
            ))}
          </div>
          
        )}
      </div>

      <DeleteDialog
        isOpen={isTrashOpen}
        onClose={handleTrashClose}
        onConfirm={handleTrashConfirm}
        title="Delete Note"
        message={`Are you sure you want to delete "${noteToDelete?.title}"?`}
        confirmText="Delete"
        cancelText="Cancel"
      />
      <EditDialog
        isOpen={isEditOpen}
        onClose={handleEditClose}
        onConfirm={handleEditConfirm}
        initialTitle={noteToEdit?.title}
        initialContent={noteToEdit?.content}
        title="Edit Note"
        confirmText="Edit"
        cancelText="Cancel"
      />

      <CreateDialog
        isOpen={isCreateOpen}
        onClose={handleCreateClose}
        onConfirm={handleCreateConfirm}
        title="Create Note"
        confirmText="Create"
        cancelText="Cancel"
      />

      <DeleteDialog
        isOpen={isAllTrashOpen}
        onClose={handleAllTrashClose}
        onConfirm={handleAllTrashConfirm}
        title="Delete Note"
        message={`Are you sure you want to delete all notes?`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
};

export default HomePage;
