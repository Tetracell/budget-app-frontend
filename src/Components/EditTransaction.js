import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditTransaction = ({ API }) => {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  let { index } = useParams();
  useEffect(() => {
    axios.get(`${API}/transactions/${index}`).then((res) => {
      setTransaction(res.data);
    });
  }, []);
  const putTransaction = () => {
    axios
        .put(`${API}/transactions/${index}`, transaction)
        .then((res) => {
            setTransaction(res.data)
        })
        .then((res) => Navigate(`/transactions`))
  }

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  const handleTransaction = (event) => {
    event.preventDefault();
    putTransaction();
  }

  return (
    <Form>
        
    </Form>
  )
};

export default EditTransaction;
