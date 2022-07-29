import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../Styles/Nav.css";

const Navigationbar = ({ transactions }) => {
  // A good lesson on why not necessarily EVERYTHING needs to be in state
  const balance = transactions
    .map(
      (
        transaction //Map through transactions
      ) =>
        transaction.category === "Income" //Check the category to determine income or expense
          ? Number(transaction.amount) // pass a as positive number
          : Number(transaction.amount * -1) // pass a as negative number
    )
    .reduce((a, b) => {
      // Now, use reduce to bring the array to one value
      return Number(a) + Number(b); //Add numbers together
    }, 0); // Special thanks to GiGi for giving me a mini-lecture on chaining methods

  return (
    <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Ultimate Budget App 9000</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="/new">New Transaction</Nav.Link>
        </Nav>
        {}
        <Nav className="me-auto" id="balance">
          <Nav.Item>Balance: ${balance.toFixed(2)}</Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
