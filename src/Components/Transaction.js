import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <>
      <div>{transaction.item_name}</div>
      <div>{transaction.amount}</div>
    </>
  );
};
