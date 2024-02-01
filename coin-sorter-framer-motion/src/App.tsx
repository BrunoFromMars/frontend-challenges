import React from "react";
import "./App.css";
import { LayoutGroup, motion } from "framer-motion";

const COINS = 6;
const BUTTONS = 4;

const App: React.FC = () => {
  const [selectedBox, setSelectedBox] = React.useState<number>(0);
  const id = React.useId();
  return (
    <LayoutGroup>
      <div className="wrapper-container">
        {[...Array(BUTTONS).keys()].map((boxIndex) => {
          return (
            <button
              className={`button-${boxIndex} ${
                selectedBox === boxIndex ? "selected-box" : ""
              }`}
              key={boxIndex}
              onClick={() => setSelectedBox(boxIndex)}
            >
              {selectedBox === boxIndex &&
                [...Array(COINS).keys()].map((coinIndex) => {
                  const uniQueId = `${id}-${coinIndex}`;
                  return (
                    <motion.div
                      key={uniQueId}
                      className="coin"
                      layoutId={uniQueId}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40 + coinIndex * 3,
                      }}
                    ></motion.div>
                  );
                })}
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
};

export default App;
