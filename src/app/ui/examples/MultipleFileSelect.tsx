"use client"
import React, { useReducer, useState } from 'react';

type FileInputState = {
  id: number;
  file: File | null;
};

type FileInputAction =
  | { type: 'ADD_FILE'; id: number; file: File }
  | { type: 'ADD_INPUT' };

const fileInputReducer = (state: FileInputState[], action: FileInputAction) => {
  switch (action.type) {
    case 'ADD_FILE':
      return state.map(input => input.id === action.id ? { ...input, file: action.file } : input);
    case 'ADD_INPUT':
      const nextId = state.length + 1;
      return state.length < 3 ? [...state, { id: nextId, file: null }] : state; // Ensure maximum of 3 file inputs
    default:
      return state;
  }
};

const MultipleFileInput: React.FC = () => {
  const [fileInputs, dispatch] = useReducer(fileInputReducer, [{ id: 1, file: null }]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      dispatch({ type: 'ADD_FILE', id, file });

      if (id === fileInputs.length && fileInputs.length < 3) {
        dispatch({ type: 'ADD_INPUT' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a submission process
    setTimeout(() => {
      setLoading(false);
      console.log("Files submitted");
    }, 2000);
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        {fileInputs.map((input, index) => (
          <div key={input.id} className="flex flex-row gap-1 items-end">
            <label className="flex-grow mb-1 text-sm font-medium text-gray-900 dark:text-gray-600">
              Upload file {index + 1}
              <input
                type="file"
                onChange={e => handleFileChange(e, input.id)}
                className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
                disabled={loading}
              />
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Files"}
        </button>
      </form>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default MultipleFileInput;
