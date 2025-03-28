import downArrowSVG from "./assets/angle-down.svg";
import { useState } from "react";

import "./styles/InfoForm.css";

const Form = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="info-form" onClick={() => setOpen(!open)}>
        <img src={props.svgType} alt="" />
        <h3>{props.sectionTitle}</h3>
        <img src={downArrowSVG} alt="" />
      </button>

      {open && <OpenForm formFields={props.formFields} />}
    </div>
  );
};

const OpenForm = ({ formFields }) => {
  return (
    <form>
      {formFields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field}>{field}</label>
          <input id={field} name={field.toLowerCase().replace(/\s+/g, "")} />
        </div>
      ))}
    </form>
  );
};

export default Form;
