import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


//ReactDOM.render(<App />, document.getElementById("root"));
//memo라는 div로 감싸면 렌더를 막음