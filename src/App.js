import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import About from "./pages/About";
import PostIdPage from "./pages/PostIdPage";
import Posts from "./pages/Posts";

import './styles/App.css'


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
