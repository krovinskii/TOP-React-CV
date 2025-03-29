import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

const Display = ({ localName }) => {
  //Retrieve data from localstorage in key{{v}{a}{l}{u}{e}}
  //Timing issue? we are constantly refreshing the object
  const [formData] = useLocalStorage(localName, {});

  const renderMap = {
    //shows general data
    general: (data) => (
      <div className="general-info">
        <h2>{data.fullname}</h2>
        <p>{data.email}</p>
        <p>{data.phonenumber}</p>
        <p>{data.city}</p>
        <p>{data.state}</p>
      </div>
    ),
    //shows edu data
    education: (data) => (
      <div className="education-info">
        <h2>{data.schoolname}</h2>
        <p>{data.study}</p>
        <p>{data.startdate}</p>
        <p>{data.graduationdate}</p>
      </div>
    ),
    //shows work data
    work: (data) => (
      <div className="work-info">
        <h2>{data.companyname}</h2>
        <p>{data.position}</p>
        <p>{data.mainresponsibility}</p>
        <p>{data.startdate}</p>
        <p>{data.enddate}</p>{" "}
      </div>
    ),
  };

  const renderFunction =
    //Renders based on localName, each component must be called 1 by 1. If wrong localName, renders unknown.
    renderMap[localName] || ((data) => <p>Unknown Section: {localName}</p>);

  return <div className="cv-display-section">{renderFunction(formData)}</div>;
};
export default Display;
