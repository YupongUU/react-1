import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Hello from "./hello";
function tick() {
  const ele = (
    <div>
      <h1>hello2</h1>
      <h2>
        it is {new Date().toLocaleTimeString()}
      </h2>
      <Hello />
    </div>
  );

  ReactDOM.render(ele, document.getElementById("root"));
}

setInterval(tick, 1000);
