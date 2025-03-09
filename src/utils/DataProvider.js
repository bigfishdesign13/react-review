import React, { useState } from "react";
import DataContext from "./DataContext";
const DataProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <DataContext.Provider
      value={{ firstName, setFirstName, lastName, setLastName }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
