import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { DefaultLayout } from "./layouts";
import Profile from "./views/Profile/Profile";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./layouts/DefaultLayout/Main/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
