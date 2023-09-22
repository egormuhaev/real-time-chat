import App from "app/App";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "app/styles/index.scss";
import { StoreProvider } from "app/providers/store";

render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
