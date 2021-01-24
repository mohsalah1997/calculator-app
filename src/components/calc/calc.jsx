import React from "react";
import "./style.css";

const calc = ({ calcClick, value, className }) => {
  return (
    <>
      <div onClick={() => calcClick()} className={className}>
        {value}
      </div>
    </>
  );
};

export default calc;
