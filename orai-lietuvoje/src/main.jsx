import React from 'react'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MainPage from './pages/mainPage.jsx';
import CityPage from './pages/cityPage.jsx';
import CitiesPage from './pages/citiesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/miestai/:miestas",
    element: <CityPage />,
  },
  {
    path: "/miestai",
    element: <CitiesPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);