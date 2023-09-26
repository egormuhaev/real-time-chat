import App from "app/App";
import { render } from "react-dom";
import "app/styles/index.scss";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider, ReduxPersistProvider } from "app/providers/store";
import { ErrorBoundary } from "app/providers/error";
import React from "react";
import "shared/config/i18n/i18n";

render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <ReduxPersistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReduxPersistProvider>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
