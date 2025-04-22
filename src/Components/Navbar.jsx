import React from "react";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import * as motion from "motion/react-client";

// const deletebut = {
//   backgroundColor: "#e11d48", // Tailwind's rose-600 equivalent
//   borderRadius: "10%",
//   marginBottom: "0.5rem",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "white",
// };
function Navbar({ mode, setDaymodef }) {
  return (
    <div className={`w-[5vw] ${mode ? "bg-zinc-600" : "bg-yellow-400"}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", bounce: 0.5 },
        }}
        // style={deletebut}
        className={`${mode ? "bg-red-200" : "bg-zinc-400 "} rounded-lg m-2 `}
      >
        <button
          title={mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="px-1 py-2 scale-1.5 transition-color duration-500"
          onClick={() => setDaymodef(mode)}
        >
          <div className="text-[5vh] px-2 py-1">
            {mode ? <FaMoon /> : <CiSun />}
          </div>
        </button>
      </motion.div>
    </div>
  );
}

export default Navbar;
