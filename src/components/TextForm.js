import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text hear2");

  const handleUpClick = () => {
    console.log("Uppercase click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase","success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const changeLower = () => {
    console.log("Change it to lower");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase","success");
  };

  const clear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("You Clear All Text","success");
  };

  const Slice = () => {
    let newText = text.slice(0, -1);
    setText(newText);
    props.showAlert("You Slice one letter","success");
  };

  const copy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("You Copy Text","success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" classNameName="form-label">
          Text
        </label> */}
          <textarea
            className="form-control p-4 text "
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#081d61" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-outline-success p-3 m-3 "
        >
          Convert to upperCase
        </button>
        <button
          type="button"
          onClick={changeLower}
          className="btn btn-outline-danger p-3 m-3 "
        >
          Convert into lowerCase
        </button>
        <button
          type="button"
          onClick={clear}
          className="btn btn-outline-dark p-3 m-3 "
        >
          Clear
        </button>
        <button
          type="button"
          onClick={Slice}
          className="btn btn-outline-info p-3 m-3 "
        >
          Slice1
        </button>
        <button type="button" onClick={copy} className="btn p-3 m-3 btn1">
          Copy
        </button>
      </div>



      
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p
          className="text"
          style={{
            backgroundColor: props.mode === "dark" ? "#0d2266" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {text.split(" ").length} Words,{text.length} character
        </p>
        <p
          className="text"
          style={{
            backgroundColor: props.mode === "dark" ? "#0d2266" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {0.008 * text.split("  ").length} Minutes read
        </p>
        <h2>Preview</h2>
        <p
          className="text"
          style={{
            backgroundColor: props.mode === "dark" ? "#0d2266" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
}
