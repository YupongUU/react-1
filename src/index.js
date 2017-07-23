import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

function tick() {
  const ele = (
    <div>
      <h1>hello2</h1>
      <h2>
        it is {new Date().toLocaleDateString()}
      </h2>
    </div>
  );

  ReactDOM.render(ele, document.getElementById("root"));
  registerServiceWorker();
}

setInterval(tick(), 1000);
