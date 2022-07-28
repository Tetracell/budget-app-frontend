import React from "react";
import { Transaction } from "./Transaction";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

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
              return (
                <Transaction
                  transaction={transaction}
                  index={index}
                  key={index}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Home;
