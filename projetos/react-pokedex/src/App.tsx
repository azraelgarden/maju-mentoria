import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}

export default App;
