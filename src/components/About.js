     import React, { useState } from "react";

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });



  // const [btntext, setbtnText] = useState("Enable Dark Mode");

  // const toogleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   }
  // };



  //change mode using variable 
  let mystyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'#042743':'white',
    // border:'2px solid',
    
    // borderColor:==='dark'?'white':'#042743'
  }

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3" style={{ color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="form-floating mb-3">
        {/* <label htmlFor="floatingInput">Email address</label> */}
        <input
          style={mystyle}
          placeholder="name@example.com"
          type="email"
          className="form-control"
          id="floatingInput"
        />
      </div>
      <div className="form-floating">
        {/* <label htmlFor="floatingPassword">Password</label> */}
        <input
          style={mystyle}
          placeholder="Password"
          type="password"
          className="form-control"
          id="floatingPassword"
        />
      </div>
      {/* <div className="container">
        <button
          onClick={toogleStyle}
          type="submit"
          className="btn btn-light my-3 rounded-circle"
        >
          {btntext}
        </button> */}
      {/* </div> */}
    </div>
  );
}
