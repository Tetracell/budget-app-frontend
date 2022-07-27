import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export const Transaction = ({ transaction, index }) => {
  const editUrl = `/${index}/edit`;
  const navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(`${API}/transactions/${index}`).then((res) => navigate("/"));
  };

  return (
    <tr>
      <td>
        <Link to={`/${index}`}>{index + 1}</Link>
      </td>
      <td>{transaction.date}</td>
      <td>{transaction.from}</td>
      <td>{transaction.item_name}</td>
      {transaction.category === "Income" ? (
        <td>${transaction.amount}</td>
      ) : (
        <td>-${transaction.amount}</td>
      )}
      <td>{transaction.category}</td>
      <td>
        <Button variant="warning" onClick={() => navigate(`${editUrl}`)}>
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
