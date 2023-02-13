import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { appConfig } from "./config/appConfig";
import { publicRoutes } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    axios.get(appConfig.baseUrl + "v2/pages").then((res) => {
      console.log(res.data);
    });
  }, []);
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="App">
      <Header isActive={isActive} setIsActive={setIsActive} />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <div className={isActive ? "anime" : "anime active"}>
                  <Page />
                </div>
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
