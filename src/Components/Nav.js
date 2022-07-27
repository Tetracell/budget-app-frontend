import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; //potentially for diaplaying total in navbar
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigationbar = ({ transactions }) => {
  const [balance, setBalance] = useState(0);

  const balanceDisplay = () => {
    transactions.forEach((element) => {
      console.log(element.amount);
      element.category === "Income"
        ? setBalance((prevBalance) => prevBalance + Number(element.amount))
        : setBalance((prevBalance) => prevBalance - Number(element.amount));
    });
  };
  useEffect(() => {
    balanceDisplay();
  }, [transactions]);

  return (
    <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Ultimate Budget App 9000</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="/new">New Transaction</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Item>Balance: ${balance}</Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
