import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Catalog from "./components/Catalog";
import Layout from "./components/Layout/Layout";
import Price from "./components/Price/Price";
import Home from "./pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/price" element={<Price />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
