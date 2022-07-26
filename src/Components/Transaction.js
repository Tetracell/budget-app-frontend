import React from "react";
import Table from "react-bootstrap/Table";

export const Transaction = ({ transaction, index } ) => {
  console.log(index);
  return (
    <tr>
      <td>{index+1}</td>
      <td>{transaction.date}</td>
      <td>{transaction.from}</td>
      <td>{transaction.item_name}</td>
      <td>${transaction.amount}</td>
      <td>{transaction.category}</td>
      <td>Delete</td>
      <td>Edit</td>
    </tr>
  );
};
