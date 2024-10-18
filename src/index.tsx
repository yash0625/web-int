// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; // Redux provider for global state
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext"; // AuthProvider context

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          {" "}
          {/* Wrap the entire app with AuthProvider */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
