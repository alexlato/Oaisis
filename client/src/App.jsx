import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-14 object-contain rounded-md"
          />
        </Link>
        <div class="flex justify-between items-center sm:px-8 px-4 py-4 font-semibold text-xl">
          <p>Oaisis.io</p>
        </div>
      </header>
    </BrowserRouter>
  );
};

export default App;
