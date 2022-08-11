import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.scss";

const firebaseConfig = {
  apiKey: "AIzaSyDE2RBt6rJAScqXEug1KpQ0tjRbbIU-IrM",
  authDomain: "beeweb-quest-react.firebaseapp.com",
  projectId: "beeweb-quest-react",
  storageBucket: "beeweb-quest-react.appspot.com",
  messagingSenderId: "453768382117",
  appId: "1:453768382117:web:aacdccebe461241fc1af4c",
  measurementId: "G-QH10436G8P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
