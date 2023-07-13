import React from "react";
import PropTypes from "prop-types";

function Alert(props) {
  const toUC = (word) => {
      let temp = word.toLowerCase();
      return temp.charAt(0).toUpperCase() + temp.slice(1); 
      
  }
  return (
    props.alert && (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{toUC(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </>
    )
  );
}

export default Alert;
