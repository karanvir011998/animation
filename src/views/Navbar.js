import styled from "styled-components";
import { motion } from "framer-motion";

function Navbar() {
  const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    .navigation {
      position: relative;
      width: 35vw;
      height: 8vw;
      background: wheat;
      box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
        10px 10px 10px rgba(0, 0, 0, 0.25),
        inset 5px 5px 10px rgba(0, 0, 0, 0.5),
        inset 5px 5px 10px rgba(0, 0, 0, 0.5),
        inset -5px -5px 15px rgba(0, 0, 0, 0.75);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        position: relative;
        list-style: none;
        width: 80px;
        margin: 0 5px;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-decoration: none;
        }
      }
    }
    .navigation li a .icon {
      position: absolute;
      font-size: 1.75rem;
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #aaa;
    }
    .navigation li a .icon {
      background: #29fd53;
      color: #fff;
      transform: translateY(0px);
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25),
        inset 2px 2px 3px rgba(255, 255, 255, 0.25),
        inset -3px -3px 5px rgba(0, 0, 0, 0.5);
    }
    .navigation li a .icon::before {
      content: "";
      position: absolute;
      inset: 10px;
      background: #2f363e;
      border-radius: 50%;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25),
        inset 2px 2px 3px rgba(255, 255, 255, 0.25),
        inset -3px -3px 5px rgba(0, 0, 0, 0.5);
      transform: scale(0);
      transition: 0.5s;
    }
    .navigation li a .icon::before {
      transform: scale(1);
    }
  `;
  const icon = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <Main className="maincontainer">
      <ul className="navigation">
        <li className="active">
          <motion.a>
            <motion.span
              variants={icon}
              whileHover="visible"
              initial="hidden"
              className="icon"
            >
              <ion-icon name="home-outline"></ion-icon>
            </motion.span>
            <motion.span className="text">Home</motion.span>
          </motion.a>
        </li>
        <li>
          <a>
            <motion.span
              variants={icon}
              // whileTap={{}}
              initial="hidden"
              className="icon"
              whileHover="visible"
            >
              <ion-icon name="person-circle-outline"></ion-icon>
            </motion.span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li>
          <a>
            <motion.span
              variants={icon}
              whileHover="visible"
              initial="hidden"
              // whileTap={{}}
              // initial="hidden"
              className="icon"
            >
              <ion-icon name="chatbox-outline"></ion-icon>
            </motion.span>
            <span className="text">Messages</span>
          </a>
        </li>
        <li>
          <a>
            <motion.span
              variants={icon}
              whileHover="visible"
              initial="hidden"
              className="icon"
            >
              <ion-icon name="camera-outline"></ion-icon>
            </motion.span>
            <span className="text">Photo</span>
          </a>
        </li>
        <li>
          <a>
            <motion.span
              variants={icon}
              whileHover="visible"
              initial="hidden"
              className="icon"
            >
              <ion-icon name="settings-outline"></ion-icon>
            </motion.span>
            <span className="text">Settings</span>
          </a>
        </li>
      </ul>
      {/* <motion.div whileTap={{ scale: 7 }}>👊</motion.div> */}
    </Main>
  );
}

export default Navbar;
