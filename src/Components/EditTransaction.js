import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditTransaction = ({API}) => {
    const [transaction, setTransaction] = useState({
        item_name:"",
        amount: 0,
        date:"",
        from:"",
        category:"",
    });

    let {index} = useParams();
    useEffect(() => {
        axios.get(`${API}/transactions/${index}`).then((res) => {
            setTransaction(res.data);
        })
    })

  return (

  );
};

export default EditTransaction;
