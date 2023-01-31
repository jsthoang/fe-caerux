import React, { useEffect } from "react";
import axios from "axios"
import { appConfig } from "./config/appConfig";
function App() {
    useEffect(()=>{
        axios.get(appConfig.baseUrl + "v2/pages")
        .then((res)=>{console.log(res.data)})
    },[])
    return (
        <div className="App">
           
        </div>
    );
}

export default App;
