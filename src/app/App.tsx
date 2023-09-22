import { AppRouter } from "./providers/router";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App dark">
      <AppRouter />
    </div>
  );
};

export default App;
