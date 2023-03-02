import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Form, Col } from "react-bootstrap";
import currencySymbols from "./currencySymbols.json";

const Api = () => {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/convert?from=${from}&to=${to}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [from, to]);

  if (amount < 1) {
    setAmount(1);
  }

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
    <Container className="p-3 bg-dark border rounded my-5">
      <Row>
        <h1 className="text-center text-white">Currency Converter</h1>
      </Row>
      <Row className="my-5">
        <Col className="col-md-8 mx-auto col-12">
          <Row className="mt-4 mx-auto text-center">
            <Col className="col-md-6 col-12  mx-auto text-center">
              <Form.Group>
                <Form.Label className="text-white"> From: </Form.Label>
                <Form.Select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  {currencySymbols.map((symbols) => (
                    <option value={symbols.abbreviation} key={symbols.id}>
                        {symbols.abbreviation}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4  mx-auto text-center">
            <Col className="col-md-6 col-12  mx-auto text-center">
              <Form.Group>
                <Form.Label className="text-white"> To: </Form.Label>
                <Form.Select value={to} onChange={(e) => setTo(e.target.value)}>
                {currencySymbols.map((symbols) => (
                    <option value={symbols.abbreviation} key={symbols.id}>
                        {symbols.abbreviation}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-4  mx-auto text-center">
            <Col className="col-md-6 col-12  mx-auto text-center">
              <Form.Group>
                <Form.Label className="text-white"> Amount: </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>

        <Col className="col-12 col-md-4 mt-5 text-center text-white">
          <p> Rate: {data.result} </p>
          <p> Date: {data.date} </p>
          <p>
            {" "}
            Result: {(amount * data.result).toFixed(4)} {to}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Api;
