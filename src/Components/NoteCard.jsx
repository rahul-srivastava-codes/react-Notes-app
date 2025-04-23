import * as motion from "motion/react-client";

const deletebut = {
  width: 70,
  height: 30,
  backgroundColor: "#e11d48", // Tailwind's rose-600 equivalent
  borderRadius: "10%",
  marginBottom: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};
const box = {
  backgroundColor: "#9911ff",
  borderRadius: 5,
};

const editbut = {
  width: 70,
  height: 30,
  backgroundColor: "#10b981", // Tailwind's emerald-500 equivalent
  borderRadius: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

function NoteCard({ data, deletenode, editnode }) {
  return (
    <div className="flex flex-col gap-4 p-4 flex-wrap md:w-2/3">
      {data.map((item, index) => (
        <motion.div whileHover={{ scale: 1.05 }} style={box}>
          <div
            key={index}
            className="flex justify-between items-start p-4 border rounded shadow bg-white"
          >
            <div>
              <h2 className="font-semibold text-lg text-indigo-700">
                Title: {item.title}
              </h2>
              <p className="text-gray-700 mt-1">Description: {item.content}</p>
            </div>

            <div className="flex flex-col gap-2 items-center ml-4">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", bounce: 0.5 },
                }}
                style={deletebut}
              >
                <button onClick={() => deletenode(item.id)}>Delete</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", bounce: 0.5 },
                }}
                style={editbut}
              >
                <button onClick={() => editnode(item.id)}>Edit</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default NoteCard;
