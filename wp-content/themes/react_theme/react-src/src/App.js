import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { appConfig } from "./config/appConfig";
import { publicRoutes } from "./routes";
function App() {
  useEffect(() => {
    axios.get(appConfig.baseUrl + "v2/pages").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
