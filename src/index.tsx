import App from "app/App";
import { render } from "react-dom";
import "app/styles/index.scss";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/store";
import { ErrorBoundary } from "app/providers/error";
import React from "react";

render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
