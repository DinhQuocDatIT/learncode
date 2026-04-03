import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { DefaultLayout } from "./layouts";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <>
      {/* <Profile /> */}
      <DefaultLayout />
    </>
  );
}

export default App;
