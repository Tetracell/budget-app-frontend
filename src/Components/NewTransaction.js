import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { InputGroup } from "react-bootstrap";

const NewTransaction = ({ API }) => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "Income",
  });

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  const handleTransaction = (event) => {
    event.preventDefault();
    postTransaction();
  };
  const postTransaction = () => {
    axios
      .post(`${API}/transactions/`, transaction)
      .then((res) => {
        setTransaction(res.data);
      })
      .then((res) => navigate(`/`));
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name of Transaction</Form.Label>
          <Form.Control
            id="item_name"
            type="text"
            value={transaction.item_name}
            onChange={handleChange}
          />
          <Form.Label>Name of Merchant</Form.Label>
          <Form.Control
            id="from"
            type="text"
            value={transaction.from}
            onChange={handleChange}
          />
          <Form.Label>Date (mm/dd/yyyy)</Form.Label>
          <Form.Control
            id="date"
            type="text"
            value={transaction.date}
            onChange={handleChange}
          />
          <Form.Label>Amount</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              id="amount"
              type="number"
              placeholder={"0.00"}
              value={transaction.amount}
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Select
          id="category"
          onChange={handleChange}
          value={transaction.category}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </Form.Select>
      </Form>
      <Button onClick={handleTransaction}>Add Transaction</Button>
    </Container>
  );
};

export default NewTransaction;
