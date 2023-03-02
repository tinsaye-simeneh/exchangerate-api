import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Label } from "react-bootstrap";

const Api = () => {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const get = () => {
    axios
      .get(`https://api.exchangerate.host/convert?from=${from}&to=${to}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="p-3 bg-primary">
        <Row className="bg-danger">
        <h1 className="text-center">Exchange Rate</h1>
        </Row>
        <label className="text-center">From</label>

    </Container>

  );
};

export default Api;
