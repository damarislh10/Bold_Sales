import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SalesContainer } from "../Containers/SalesContainer";

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SalesContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
