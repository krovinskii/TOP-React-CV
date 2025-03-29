import downArrowSVG from "./assets/angle-down.svg";
import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

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

      {open && (
        <OpenForm formFields={props.formFields} localName={props.localName} />
      )}
    </div>
  );
};

const OpenForm = ({ formFields, localName }) => {
  //Use localstorage to store formData on submit
  //localName dynamically created new localStorages for each container

  const [storedData, setStoredData] = useLocalStorage(localName, {});
  const [formInput, setFormInput] = useState(storedData);

  //Submits data to display
  function handleSubmit(e) {
    e.preventDefault();
    setStoredData(formInput);
  }

  //Changes local storage as soon as user types
  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => {
          const inputName = field.toLowerCase().replace(/\s+/g, "");
          return (
            <div key={index}>
              <label htmlFor={inputName}>{field}</label>
              <input
                id={inputName}
                name={inputName}
                value={formInput[inputName] || ""}
                onChange={handleChange}
              />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
