import { useState } from "react";
import Navbar from "./Components/Navbar";
import NoteForm from "./Components/NoteForm";

function App() {
  const [daymode, setDaymode] = useState(false);
  function mode(daymode) {
    setDaymode(!daymode);
  }
  return (
    <div
      className={`h-[100vh] w-[100vw] flex ${
        daymode ? "bg-zinc-600" : "bg-white"
      }`}
    >
      <Navbar mode={daymode} setDaymodef={mode}></Navbar>
      <NoteForm></NoteForm>
    </div>
  );
}

export default App;
