import React from "react";
import { Transaction } from "./Transaction";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

const Home = ({ transactions }) => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default Home;
