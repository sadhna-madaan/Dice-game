  import React, { useState } from "react";
  import Rule from "./Rule";

  function Play() {
    const number = [1, 2, 3, 4, 5, 6];
    
    const [selectedNumber, setselectedNumber] = useState('');
    const[dice,setDice]=useState(1);
    const[error,setError]=useState(null);
    const[score,setScore]=useState(0);
    
    console.log(selectedNumber);
    const onnumberHandler = (value) => {
      setselectedNumber(value);
      setError(null);
    };

    const genrandomnum=()=>{
     if(selectedNumber){
      const generatednum=Math.ceil(Math.random()*6);
      setDice(generatednum);
      console.log(generatednum);  
      // console.log(dice);

      if(selectedNumber===generatednum){
        setScore((prev)=>prev+generatednum)
      }
      else{
        setScore((prev)=>prev-2)
      }
     }
     else{
      setError("Please Select Number")
    }
    }

    const resethandler=()=>{
      setScore(0);
      setselectedNumber('');
    }
      return (
      <>
        <div className="text-center">
          <h1 className="fw-bolder" style={{color:error?"red":"black"}}>{error?error:"Select Number"}</h1>

          <div className="d-flex justify-content-evenly my-5">
            {number.map((value) => (
              <button
              
                style={{
                  background:(selectedNumber===value?"green":"black"),
                  color: "white",
                  width: "40px",
                  height:"40px",
                  textAlign: "center",
                  borderRadius:"6px",
                  key: { value }
                }}
                onClick={()=>onnumberHandler(value)}
                >
                {value}
              </button>
            ))}
          </div>
          <img style={{ width: "90px", maxWidth: "100px" }} src={`./dice/dice${dice}.jpg` }  onClick={genrandomnum} />
          
          <p className="fs-3">Click on the dice to roll</p>
          <p className="fw-bolder" style={{ fontSize: "70px",color:score>=0?"black":"red" }}>
            {score}
          </p>
          <h3 className="fs-1 fw-bold">Total Score</h3>
          <button className="my-3 btn btn-secondary" onClick={resethandler}>Reset Score</button>
        </div>
      </>
    );
  }

  export default Play;
