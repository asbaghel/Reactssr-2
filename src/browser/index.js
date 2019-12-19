import React from "react";
import ReactDOM from "react-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import App from "../shared/App";
import { Router, BrowserRouter } from "react-router-dom";

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <BrowserRouter>
    <App data={window.__INITIAL_DATA__} />
    </BrowserRouter>
     
    
  </StyleContext.Provider>,
  document.getElementById("root")
);
