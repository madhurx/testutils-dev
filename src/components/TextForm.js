import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const handleUp = (e) => {
    setText(e.target.value);
  };

  const handleUcClick = () => {
    let n = text.toUpperCase();
    props.showAlert("success", "Converted to UpperCase");
    setText(n);
  };
  const handleLcClick = () => {
    let n = text.toLowerCase();
    setText(n);
  };
  const handleClrClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    var copyText = document.getElementById("myBox");
    navigator.clipboard.writeText(copyText.value);
  };
  const handleRemoveSpaceClick = () => {
    let str = text.split(/[\s]+/);
    setText(str.join(" "));
  };
  const wordsCount = () => {
    let c = text.trim();
    if (c === "") return 0;
    else return c.split(/[\s]+/).length;
  };

  const toggleMode = () => {
    if (style.backgroundColor === "black") {
      setBtnText("Enable Dark Mode");
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else {
      setBtnText("Enable Light Mode");
      setStyle({
        backgroundColor: "black",
        color: "white",
      });
    }
  };

  return (
    <>
      <div className={`container bg-${props.mode}`}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="3"
            value={text}
            onChange={handleUp}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUcClick}>
          Convert to UC
        </button>
        <button className="btn btn-primary m-3" onClick={handleLcClick}>
          Convert to LC
        </button>
        <button className="btn btn-primary m-3" onClick={handleClrClick}>
          Clear Text
        </button>
        <button className="btn btn-primary m-3" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary m-3"
          onClick={handleRemoveSpaceClick}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container mt-5" style={style}>
        <h1>Analyze textbox</h1>
        <p>
          Words: {wordsCount()}
          <br />
          Character: {text.length}
        </p>

        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter your text above."}</p>
        <button className="btn btn-secondary ms-0 m-3" onClick={toggleMode}>
          {btnText}
        </button>
      </div>
    </>
  );
}
