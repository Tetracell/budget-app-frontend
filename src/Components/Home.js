import React from "react";
import { Transaction } from "./Transaction";
import Table from "react-bootstrap/Table";

const Home = ({ transactions }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Merchant</th>
            <th>Transaction Name</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            let url = `/transactions/${index}`;
            return <Transaction transaction={transaction} index={index} />;
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
