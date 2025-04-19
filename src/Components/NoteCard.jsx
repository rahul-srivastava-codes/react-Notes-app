import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const button = {
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#0f1115",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  outerWidth: "20vw",
  innerWidth: "20vw",
};

function NoteCard({ data }) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {data.map((item) => (
              <div>
                <div>{item.title}</div>
                <div>{item.content}</div>
                <button className="bg-red-400 rounded-lg px-2 py-1">
                  Delete
                </button>
              </div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        style={button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show "} notes
      </motion.button>
    </div>
  );
}

export default NoteCard;
