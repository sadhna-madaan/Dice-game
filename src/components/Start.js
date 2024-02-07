import React, { useState } from "react";
import Play from "./Play";
import Rule from "./Rule";

function Start() {
  const [gameStarted, setgameStarted] = useState(false);
  const startgameHandler=()=>{
    setgameStarted(true);
  }
  return (
    <>
      {gameStarted ?<Rule/>:
        <div
          className="d-flex flex-row  align-items-center  "
          style={{ margin: "10% 23%" }}
        >
          <div className="">
            <img style={{ width: "400px", maxWidth: "100%" }} src="dices.jpg" />
          </div>
          <div className="flex-grow-1 ">
            <h1 className="align-right fw-bold">The Dice Game</h1>

            <div className="text-end">
              <button className="btn btn-secondary" onClick={startgameHandler}>Start Game</button>
            </div>
          </div>
        </div>

      }
    </>
  );
}

export default Start;
