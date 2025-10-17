import express from "express";
import { getNotes, createNote, updateNote, deleteNote, deleteNotes } from "../Controllers/notesController.js";


const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.delete("/", deleteNotes);
export default router;