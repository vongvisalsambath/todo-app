import noteRepo from "../repositories/NoteRepo.ts";
import { Note, UpdateNote } from "../types/app.ts";
import { NoteRecord } from "../types/db.ts";

export const getNotes = async () => {
  const notes = await noteRepo.selectAll();

  return notes.rows.map((row: NoteRecord) => {
    return notes.rowDescription.columns.reduce((acc, el, iCol) => {
      acc[el.name] = row[iCol];
      return acc;
    }, {});
  });
}

export const createNote = async (noteData: Note) => {
  const newNote = {
    label: String(noteData.label),
    isChecked: "isChecked" in noteData ? Boolean(noteData.isChecked) : false,
    createdAt: noteData.createdAt
  };

  let result = await noteRepo.create(newNote);
  let id;

  if (result && result.rows.length) id = result.rows[0][0];

  return id;
}

export const updateNote = async (id: number, noteData: UpdateNote) => {
  const result = await noteRepo.update(id, noteData);
  return result && result.rows.length && result.rows[0][0];
}

export const deleteNote = async (id: number) => {
  const result = await noteRepo.delete(id);
  return result && result.rows.length && result.rows[0][0];
}