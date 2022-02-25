import React, { useState, useEffect } from "react";

import "./styles.css";

import "./mock-api/mock-server";

export default function App() {
  const [persons, setPersons] = useState([]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
