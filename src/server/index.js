import express from "express";
import fetch from "isomorphic-fetch";
import cors from "cors";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import React from "react";
import serialize from "serialize-javascript";
import { matchPath, StaticRouter } from "react-router-dom";
import routes from "../shared/routes";
import StyleContext from "isomorphic-style-loader/StyleContext";



const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  // const activeRoute=routes.find(route=>matchPath(req.url,route))||{}
  console.log("reqUrl:", req.url);

  fetch("http://localhost:4001/api/posts")
    .then(res => res.json())
    .then(data => {
      var location = req.url;
      console.log("location:", location);
      var context = { data };
      const name ="ABhishek";
      const css = new Set();
      const insertCss = (...styles) =>
        styles.forEach(style => css.add(style._getCss()));
    
      const markup = renderToString(
        <StyleContext.Provider value={{ insertCss }}>
          <StaticRouter location={location} context={context}>
            <App />
          </StaticRouter>
        </StyleContext.Provider>
      );
    
      res.send(
        `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>My Website</title>
        <style type="text/css">${[...css].join("")}</style>
        
     <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>  
    </head>
    <body>
        
        <div id="root">${markup}</div>
        <script src="bundle.js"></script>   
                
    </body>
    </html>
        `
      );});

  

});


app.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});

// <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
