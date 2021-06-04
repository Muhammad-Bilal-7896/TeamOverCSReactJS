import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from "../src/App";

const PORT = 8000;

const app = express();

function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(counterApp)
  
    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
  
    // Grab the initial state from our Redux store
    const preloadedState = store.getState()
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/recipes/server-rendering/#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
      `
  }

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDomServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
)})

app.use('^/$',(req,res,next)=>{
    fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Some error happened")
        }
        return res.send(data.replace('<div id="root"></div>',`<div id="root">${ReactDomServer.renderToString(<App />)}</div>`))
    })
});

app.use(express.static(path.resolve(__dirname,'..','build')))

app.listen(PORT,()=>{
    console.log(`App launched on ${PORT}`);
});
