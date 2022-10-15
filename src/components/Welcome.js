import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import Url from "../conection/Url";

function Welcome() {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState(null);
  const context = useContext(UserContext);

  async function checkToken() {
    axios
      .get(`${Url}/auth/check`, {
        headers: {
          Authorization: `Bearer ${context.ctoken[0]}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setChecked(true);
      });
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {checked ? (
        <div>
          Bienvenido {data.username}, tu numero de Usuario es: {data.id}{" "}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Welcome;
