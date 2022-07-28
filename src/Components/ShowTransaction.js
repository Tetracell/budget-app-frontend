import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { InputGroup } from "react-bootstrap";

export const ShowTransaction = ({ API }) => {
  const { transactionID } = useParams();
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const transactionValue = () => {
    return transaction.category === "Income"
      ? Number(transaction.amount)
      : Number(transaction.amount) * -1;
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${transactionID}`)
      .then((res) => setTransaction(res.data));
  });

  return (
    <Container>
      <Form>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Merchant</Form.Label>
            <Form.Control
              type="text"
              value={transaction.from}
              readOnly
            ></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={transaction.date}
              readOnly
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Transaction Name</Form.Label>
            <Form.Control
              type="text"
              value={transaction.item_name}
              readOnly
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amount</Form.Label>
            <InputGroup className="amount">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                value={transactionValue()}
                readOnly
              ></Form.Control>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={transaction.category}
              readOnly
            ></Form.Control>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};
