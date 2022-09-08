import { motion } from "framer-motion";
import { Mainn } from "../styles/MianStyle.js";
import Navbar from "./Navbar.js";
// import { useRef, useEffect, useState } from "react";
function Main() {
  return (
    <Mainn>
      <motion.div>
        <Navbar></Navbar>
        {/* <motion.div className="out">
          <motion.div
            animate={{ rotate: 20 }}
            // animate={{ x: 20 }}

            transition={{
              repeat: 1,
              repeatType: "reverse",
              duration: 0.4,
            }}
            className="uldiv"
          >
            <motion.ul>
              <li>Home</li>
              <li>Profile</li>
              <li>Messages</li>
              <li>Camera</li>
              <li>Settings</li>
            </motion.ul>
          </motion.div>
        </motion.div> */}
      </motion.div>
      <motion.h1
        animate={{ color: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
        // transition={{ delay: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        Drag using Framer Motion
      </motion.h1>
      <motion.div
        animate={{
          // background: "wheat",
          rotate: [0, 25, 25, 0],
          // borderRadius: ["10%", "10%", "10%", "10%"],
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="outer"
        transition={"2s"}
      >
        <motion.div
          whileTap={{ scale: 0.8 }}
          drag="x"
          dragConstraints={{ right: 0, left: -600 }}
          // dragMomentum={false}
          className="inner"
        >
          <motion.div className="item">
            <motion.img
              // style={{ transform: "rotate(var(--rotate))" }}
              // initial={{ x: "0" }}
              // animate={{ x: "0" }}
              src="./images/one.jpg"
              alt="img"
            />
            <img src="./images/two.jpg" alt="img" />
            <img src="./images/3.jpg" alt="img" />
            <img src="./images/4.jpg" alt="img" />
            <img src="./images/5.jpg" alt="img" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Mainn>
  );
}

export default Main;
