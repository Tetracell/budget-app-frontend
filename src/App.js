import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
//import "./App.css";

//Components
import Home from "./Components/Home";
import Navigationbar from "./Components/Nav";
import { NewTransaction } from "./Components/NewTransaction";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      setTransactions(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home transactions={transactions} />} />
        <Route path="/new" element={<NewTransaction/>}/>;
      </Routes>
    </div>
  );
}

export default App;
