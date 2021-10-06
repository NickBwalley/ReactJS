import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));

// deployment to vercel: https://youtube-hooks-rouge.vercel.app
/**
 * sudo npm install -g vercel
 * vercel login
 * vercel
 * vercel --prod
 */
