import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "moment/locale/pt-br";

import Routes from "./routes";
import { store, persistor } from "./store";

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import GlobalTheme from "./theme";
import "./index.css";

import "antd/dist/antd.css";
import "react-credit-cards/es/styles-compiled.css";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={GlobalTheme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);