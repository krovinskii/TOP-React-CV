import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

const Display = ({ localName }) => {
  //Retrieve data from localstorage
  const formData = JSON.parse(localStorage.getItem(localName));
  console.log;
};
export default Display;
