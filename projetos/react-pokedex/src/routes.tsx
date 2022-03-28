import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const routes = [
    {
        element: <Home />,
        path: "/",
    },
    {
        element: <Login />,
        path: "login",
    },
];
