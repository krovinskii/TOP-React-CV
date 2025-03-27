import downArrowSVG from "./assets/angle-down.svg";
import { useState } from "react";

import "./styles/InfoForm.css";

const Form = (props) => {
  const { open, setOpen } = useState(false);
  return (
    <button className="info-form">
      <img src={props.svgType} alt="" />
      <h3>{props.sectionTitle}</h3>
      <img src={downArrowSVG} alt="" />
    </button>
  );
};

const OpenForm = () => {
  return (
    <form>
      <label></label>
      <input />
      <label></label>
      <input />
      <label></label>
      <input />
      <label></label>
      <input />
      <label></label>
      <input />
    </form>
  );
};

export default Form;
