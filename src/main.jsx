import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Info from "./Pages/Info.jsx";
import Browse from "./Pages/Browse.jsx";
import MovieSelection from "./Pages/MovieSelection.jsx";
import NotFound from "./NotFound.jsx";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="Browse" element={<Browse />} />
        <Route path="/MovieSelection" element={<MovieSelection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
