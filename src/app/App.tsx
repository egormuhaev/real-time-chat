import { AppRouter } from "./providers/router";
import React, { useEffect } from "react";
import { LoadData } from "./providers/data/ui/LoadData/LoadData";
import { useSelector } from "react-redux";
import { getUserAuthState } from "entities/User/model/selectors/getUserAuthState/getUserAuthState";
import { useLocation, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App dark">
      <LoadData>
        <AppRouter />
      </LoadData>
    </div>
  );
};

export default App;
