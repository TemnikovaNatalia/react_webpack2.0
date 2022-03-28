import React, { useEffect } from "react";
import { apiUrl } from "../constants";

export function Dogs() {
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        const image = document.createElement("img");
        image.src = data.message;
        document.querySelector(".dogsAp").appendChild(image);
      });
  }, []);

  return (
    <>
      <h2>Собачки API</h2>
      <p>Подождите минутку, мы грузим Вашу собачку...</p>
      <div className="dogsAp"></div>
    </>
  );
}
