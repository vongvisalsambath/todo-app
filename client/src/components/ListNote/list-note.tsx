import { ChangeEvent, FormEvent } from "react";
import { Note, ListNoteProps } from "../../types/app";

const ListNote = ({ notes, checkNote, removeNote }: ListNoteProps) => {

  const onCheckNote = (e: ChangeEvent<HTMLInputElement>, note: Note) => {
    e.persist();
    checkNote({ ...note, isChecked: e.target.checked });
  }

  const onRemoveNote = (id: number) => {
    removeNote(id);
  }

  return (
    <ul className="flex flex-col gap-5 mt-6 select-none">
      {
        notes.map((note: Note) => {
          return (
            <li key={note.id} className="text-left cursor-pointer">
              <div className="flex items-center">
                <input id={`#${note.id}`}
                  type="checkbox"
                  value={note.label}
                  checked={note.isChecked}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onCheckNote(e, note)} />

                <button type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-1.5 p-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => onRemoveNote(note.id)}>Remove</button>

                <label htmlFor={`#${note.id}`}
                  className="ml-2 text-sm font-medium"
                  style={{
                    textDecorationLine: note.isChecked ? "line-through" : "inherit"
                  }}>
                  {note.label}
                </label>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

export default ListNote;
