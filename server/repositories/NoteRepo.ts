import client from "../db/database.ts";
import { Note, UpdateNote } from "../types/app.ts";

class NoteRepo {
  create(note: Note) {
    return client.queryArray
      `INSERT INTO notes (label, is_checked, created_at) VALUES (${note.label}, ${note.isChecked}, ${note.createdAt}) RETURNING id`;
  }

  selectAll() {
    return client.queryArray
      `SELECT * FROM notes ORDER BY id`;
  }

  selectById(id: number) {
    return client.queryArray
      `SELECT * FROM notes WHERE id = ${id}`;
  }

  update(id: number, note: UpdateNote) {
    return client.queryArray
      `UPDATE notes SET label = ${note.label}, is_checked = ${note.isChecked}, updated_at = ${note.updatedAt} WHERE id = ${id} RETURNING id`;
  }

  delete(id: number) {
    return client.queryArray
      `DELETE FROM notes WHERE id = ${id} RETURNING id`
  }
}

export default new NoteRepo();