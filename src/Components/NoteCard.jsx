import * as motion from "motion/react-client";

const ball = {
  width: 70,
  height: 25,
  backgroundColor: "#dd00ee",
  borderRadius: "10%",
};

function NoteCard({ data, deletenode }) {
  return (
    <div>
      {data.map((item, index) => (
        <div className="flex items-center justify-between" key={index}>
          <div>
            <div>Title : {item.title}</div>
            <div>Description : {item.content}</div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
          >
            <button className="px-2" onClick={() => deletenode(item.id)}>
              Delete
            </button>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default NoteCard;
