export interface NewNote {
  label: string,
  isChecked: boolean,
}

export interface Note extends NewNote {
  id: number,
  createdAt: number
};

export type WriteNewNote = (newNote: NewNote) => void;
export type WriteNote = (note: Note) => void;
export type RemoveNote = (id: number) => void;

export interface InputNoteProps {
  addNote: WriteNewNote
}

export interface ListNoteProps {
  notes: Note[],
  checkNote: WriteNote
  removeNote: RemoveNote
}
