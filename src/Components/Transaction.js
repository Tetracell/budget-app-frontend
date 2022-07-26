import React from "react";
import Button from "react-bootstrap/Button";

export const Transaction = ({ transaction, index }) => {
  console.log(index);
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  return (
    <tr>
      <td>{index + 1}</td>
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
        <Button variant="warning" onClick={handleEdit}>Edit</Button>
      </td>
      <td>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  );
};
