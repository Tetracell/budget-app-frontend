import React from "react";
import { Transaction } from "./Transaction";
import Table from "react-bootstrap/Table";

const Home = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction, index) => {
        let url = `/transactions/${index}`;
        return (
          <>
            <Transaction transaction={transaction} />
          </>
        );
      })}
    </>
  );
};

export default Home;
