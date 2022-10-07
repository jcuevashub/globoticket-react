import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Server } from "miragejs";

new Server({
  routes() {
    this.get("http://localhost:3333/events", () => [
      {
        id: 1,
        artist: "Container Enthusiam",
        name: "Talk Docker to Me Tour",
        date: "2021-10-01",
        price: 59.99,
        imgUrl: "logos/DigitalCowboys_BinaryBovine.png",
      },
      {
        id: 2,
        artist: "Container Enthusiam",
        name: "Talk Docker to Me Tour",
        date: "2021-10-01",
        price: 59.99,
        imgUrl: "logos/DigitalCowboys_BinaryBovine.png",
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
