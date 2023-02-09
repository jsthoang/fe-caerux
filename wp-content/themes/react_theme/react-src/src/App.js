import React, { useEffect } from "react";
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
  return (
    <div className="App">
      <Header/>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
