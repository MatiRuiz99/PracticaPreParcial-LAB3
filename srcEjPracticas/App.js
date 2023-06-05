import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { useEffect, useState } from "react";
import Books from "./components/Books";
import { ScrollEvent } from "./components/ScrollEvent";
import ContadorTiempo from "./components/Cronometro";

function App() {
  return (
    <div>
      <ContadorTiempo />
    </div>
  );
}

export default App;
