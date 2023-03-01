import { useState, useEffect } from "react";
import { Note, NewNote } from "./types/app";
import { FetchedNote, HTTPMethod } from "./types/http";
import InputNote from "./components/InputNote/input-note";
import ListNote from "./components/ListNote/list-note";
import { request } from "./services/http";

import './App.css';

function App() {
  const [notes, updateNotes] = useState<Note[]>([]);

  const addNote = async (newNote: NewNote) => {
    const response = await request(HTTPMethod.POST, "/notes", {
      label: newNote.label,
      is_checked: newNote.isChecked
    });

    const note = response.data;

    updateNotes([...notes, note]);
  };

  const checkNote = async (checkedNote: Note) => {
    await request(HTTPMethod.PUT, `/notes/${checkedNote.id}`, {
      label: checkedNote.label,
      is_checked: checkedNote.isChecked
    });

    const updatedNotes = notes.map((note: Note) => {
      if (note.id === checkedNote.id) {
        return checkedNote;
      }

      return note;
    });

    updateNotes([...updatedNotes]);
  };

  const removeNote = async (id: number) => {
    await request(HTTPMethod.DELETE, `/notes/${id}`);

    const updatedNotes = notes.filter((note: Note) => {
      return note.id !== id;
    });

    updateNotes([...updatedNotes]);
  }

  useEffect(() => {
    (async () => {
      const response = await request(HTTPMethod.GET, "/notes");

      if (response && !response.error) {
        const fetchedNotes: Note[] = response.data.map((note: FetchedNote) => {
          return {
            id: note.id,
            label: note.label,
            isChecked: note.is_checked,
            createdAt: note.created_at
          };
        });

        updateNotes(fetchedNotes);
      }
    })();
  }, []);

  return (
    <div className="App p-5">
      <InputNote addNote={addNote} />
      <small>Count: {notes.length}</small>
      <ListNote notes={notes} checkNote={checkNote} removeNote={removeNote} />
    </div>
  );
}

export default App;
