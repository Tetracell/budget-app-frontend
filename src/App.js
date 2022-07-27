import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
//import "./App.css";

//Components
import Home from "./Components/Home";
import Navigationbar from "./Components/Nav";
import NewTransaction from "./Components/NewTransaction";
import EditTransaction from "./Components/EditTransaction";
import { ShowTransaction } from "./Components/ShowTransaction";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      setTransactions(res.data);
    });
  }, [transactions]);

  return (
    <div className="App">
      <Navigationbar transactions={transactions} />
      <Routes>
        <Route path="/" element={<Home transactions={transactions} />} />
        <Route path="/:transactionID" element={<ShowTransaction API={API} />} />
        <Route path="/new" element={<NewTransaction API={API} />} />;
        <Route
          path="/:transactionID/edit"
          element={<EditTransaction API={API} />}
        />
      </Routes>
    </div>
  );
}

export default App;
