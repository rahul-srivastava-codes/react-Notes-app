import NoteForm from "./Components/NoteForm";

function App() {
  return (
    <div className="h-[100vh] w-[100vw]  flex items-center justify-center flex-col ">
      <h3 className="text-3xl font-bold border-solid border-2 rounded-lg border-indigo-600 px-5 py-2">
        Notes App
      </h3>
      <NoteForm></NoteForm>
    </div>
  );
}

export default App;
