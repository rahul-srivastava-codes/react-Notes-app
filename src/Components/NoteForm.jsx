import { useState } from "react";
import NoteCard from "./NoteCard";

function NoteForm() {
  const [data, setData] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleclick(e) {
    e.preventDefault();

    if (isEdit) {
      const updatedNotes = data.map((note) =>
        note.id === editId ? { ...note, title, content, id: Date.now() } : note
      );
      setData(updatedNotes);
      setIsEdit(false);
      setEditId(null);
    } else {
      setData([...data, { title, content, id: Date.now() }]);
    }

    settitle("");
    setcontent("");
  }

  function deletenode(id) {
    setData(data.filter((item) => item.id !== id));
  }

  function editnode(id) {
    const noteToEdit = data.find((item) => item.id === id);
    if (noteToEdit) {
      settitle(noteToEdit.title);
      setcontent(noteToEdit.content);
      setIsEdit(true);
      setEditId(id);
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-evenly mt-5">
      <form
        onSubmit={handleclick}
        className="flex flex-col items-center px-4 py-4 border rounded-lg shadow-md w-full md:w-1/3 bg-white"
      >
        <h3 className="text-3xl font-bold text-indigo-600 mb-4">Notes App</h3>

        <input
          className="w-full px-3 py-2 mb-3 border rounded-lg"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />

        <textarea
          className="w-full px-3 py-2 mb-3 border rounded-lg"
          placeholder="New Note"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          required
        />

        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg">
          {isEdit ? "Update Note" : "Add Note"}
        </button>
      </form>

      <NoteCard data={data} deletenode={deletenode} editnode={editnode} />
    </div>
  );
}

export default NoteForm;
