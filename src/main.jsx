// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppProvider from "./contextAPI.jsx";
import GlobalStyles from "./GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppProvider>
    <GlobalStyles />
    <App />
  </AppProvider>
  // </React.StrictMode>,
);
