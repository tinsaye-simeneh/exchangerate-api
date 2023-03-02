import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);

  const get = () => {
    axios
      .get("https://api.exchangerate.host/convert?from=USD&to=EUR&amount=1")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h1>
        {data.rate} {data.result}
      </h1>
    </div>
  );
};

export default Api;
