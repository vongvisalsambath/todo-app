import { useRef } from "react";
import { NewNote } from "../../types/app";
import { InputNoteProps } from "../../types/app";

const InputNote = ({ addNote }: InputNoteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const add = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
  
      if (value) {
        addNote({
          label: value,
          isChecked: false,
        });
      }
    }
  }

  return (
    <div>
      <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Note</label>
      <input ref={inputRef} type="text" id="note" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-0.5" placeholder="Add new item" required />
      <button type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={add}>Add</button>
    </div>
  );
};

export default InputNote; 
