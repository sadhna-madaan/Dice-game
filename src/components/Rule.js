import React, { useState } from "react";
import Play from "./Play";

function Rule() {
    const [nextClick,setnextClick]=useState(false)
    const onnextHandler=()=>{
        setnextClick(true);
    }
  return (
    <>
     {nextClick? <Play/>: <div className=" align-items-center">
        <div className="position-absolute bottom-50 end-50">
          <p className="fw-bold fs-1">Game Rules:</p>
          <p className="fs-4">1. Select any number</p>
          <p className="fs-4">2. Click on the dice to roll it</p>
          <p className="fs-4">4. Click on Reset button to clear the score</p>
          <div className="text-end"><button className=" btn btn-secondary" style={{width:"25%"}} onClick={onnextHandler}>Next</button></div>
          <div style={{position:"relative"}}><img style={{position:"absolute", left:"135%" ,bottom:"-200px", transform:"rotate(20deg)", maxWidth:"100%", width:"120%"}} src="./dicess.jpg"/></div>
          
        </div>
      </div>}
    </>
  );
}

export default Rule;