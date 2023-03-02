import React, { useEffect }  from "react";
import axios from "axios";

const get = () => {
    axios.get("https://api.exchangerate.host/latest")
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

const Api = () => {

    useEffect(() => {
        get();
    }, []);

    return (
        <div>
            <h1>API</h1>
        </div>
    );
    }

export default Api;
