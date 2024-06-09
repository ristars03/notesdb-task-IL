const express = require("express");
const router = express.Router();

const NotesModel = require("../controllers/NotesController.js");

router.get("/", NotesModel.getAllNusantaraValor);
router.get("/:id", NotesModel.getNotesById);
router.post("/", NotesModel.addNotes);
router.put("/:id", NotesModel.updateNotes);
router.delete("/:id", NotesModel.deleteNotes);

module.exports= router