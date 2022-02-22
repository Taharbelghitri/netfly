import React from "react";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import ArticlePage from "./pages/article.page";
import CategoryPage from "./pages/category.single.page";
import Home from "./pages/home.page";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/layout/menu";
import AboutPage from "./pages/about.page";
import CategoryRandom from "./pages/category.random.page";
import Search from "./components/search.component";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Menu />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/category" element={<CategoryRandom />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
