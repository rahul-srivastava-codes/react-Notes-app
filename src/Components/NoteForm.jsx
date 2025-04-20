import { useState } from "react";
import NoteCard from "./NoteCard";

function NoteForm() {
  const [data, setData] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  function handleclick(e) {
    e.preventDefault();
    setData([...data, { title, content, id: Date.now() }]);
    settitle("");
    setcontent("");
  }
  function deletenode(index) {
    setData(data.filter((item) => item.id !== index));
  }

  return (
    <div className="flex justify-around">
      <form
        onSubmit={handleclick}
        className="flex flex-col items-center px-2 py-2 justify-center"
      >
        <h3 className="text-3xl font-bold border-solid border-2 rounded-lg border-indigo-600 px-5 py-2">
          Notes App
        </h3>
        <input
          className="px-2 py-1 m-2 rounded-lg"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          required
        />
        <textarea
          className="px-2 py-1 m-2 rounded-lg"
          type="text"
          placeholder="New Note"
          value={content}
          onChange={(e) => {
            setcontent(e.target.value);
          }}
          required
        />
        <button className="px-2 py-1 bg-zinc-400 rounded-lg">Add Note</button>
      </form>
      <NoteCard data={data} deletenode={deletenode}></NoteCard>
    </div>
  );
}

export default NoteForm;
