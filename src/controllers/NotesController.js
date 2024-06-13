const json = require("express");
const NotesModel = require("../models/NotesModels.js");

const getAllNusantaraValor = async (req, res) => {
  try {
    const [data] = await NotesModel.getAllNusantaraValor();
    res.status(200).json({
      message: "Berhasil Mengambil Seluruh Data Notes",
      data: data,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Gagal Mengambil Seluruh Data Notes",
      data: [],
    });
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await NotesModel.getNotesById(id);
    res.status(200).json({
      message: `Data dengan id: ${id} berhasil di ambil!`,
      data: data,
    });
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    res.status(500),
      json({
        message: `Gagal Mengambil Catatan Dengan id: ${id}`,
        data: [],
      });
  }
};


const addNotes = async (req, res) => {
  const { body } = req;
  if (!body.title || !body.datetime || !body.note) {
    res.status(400).json({
      message: "Data tidak lengkap!",
    });
  }
  try {
    const data = await NotesModel.addNotes(body);
    res.status(201).json({
      message: "Data berhasil ditambahkan!",
      data: body,
    });
  } catch (error) {
    console.error(`Error when insert data: ${error}`);
    res.status(500),
      json({
        message: `Gagal Menambahkan data catatan`,
        data: [],
      });
  }
};

const updateNotes = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  console.log(id);
  if (!body.title || !body.datetime || !body.note) {
    res.status(400).json({
      message: "Data tidak lengkap!",
    });
  }
  try {
    const data = await NotesModel.updateNotes(body, id);
    res.status(201).json({
      message: `Data dengan id: ${id} berhasil diubah!`,
      data: body,
    });
  } catch (error) {
    console.error(`Error update data: ${error}`);
    res.status(500),
      json({
        message: `Gagal mengubah data catatan dengan id: ${id}`,
        data: [],
      });
  }
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await NotesModel.deleteNotes(id);
    res.status(200).json({
      message: `Data dengan id: ${id} telah dihapus!`,
      data: [],
    });
  } catch (error) {
    console.error(`Error delete data: ${error}`);
    res.status(500),
      json({
        message: `Gagal menghapus data catatan dengan id: ${id}`,
        data: [],
      });
  }
};

module.exports={
  getAllNusantaraValor,
  getNotesById,
  addNotes,
  updateNotes,
  deleteNotes,
};