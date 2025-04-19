import { useState } from "react";
import NoteCard from "./NoteCard";

function NoteForm() {
  const [data, setData] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  function handleclick(e) {
    e.preventDefault();
    setData([...data, { title, content }]);
    settitle("");
    setcontent("");
  }

  return (
    <div>
      <form
        onSubmit={handleclick}
        className="flex flex-col items-center px-2 py-2 justify-center"
      >
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
      <NoteCard data={data}></NoteCard>
    </div>
  );
}

export default NoteForm;
