import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from './Pages/Signin.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route element={<Signin/>} path="/"/>
            <Route element={<App/>} path="/Home"/>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
