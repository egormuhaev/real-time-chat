import { LoadProfileData } from "entities/Profile";
import { AppRouter } from "./providers/router";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App dark">
      <LoadProfileData>
        <AppRouter />
      </LoadProfileData>
    </div>
  );
};

export default App;
