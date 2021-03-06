import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SuggestionContextProvider from "./context/SuggestionsContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SuggestionContextProvider>
        <App />
      </SuggestionContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
