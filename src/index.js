import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "typeface-roboto";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
