import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProcessImage from "./page/ProcessImage";
import TheNavbar from "./components/Header/TheNavbar";
import TheFooter from "./components/Footer/TheFooter";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <TheNavbar>
                <App></App>
                <TheFooter />
            </TheNavbar>
        ),
    },
    {
        path: "/food-classification",
        element: (
            <TheNavbar>
                <ProcessImage></ProcessImage>
                <TheFooter />
            </TheNavbar>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
