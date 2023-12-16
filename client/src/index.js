import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import Cart from "./components/Cart";
import Order from "./components/Order";



const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Cart",
        element: <Cart />,
    },
    {
        path: "/Order",
        element: <Order />,
    }
])



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
