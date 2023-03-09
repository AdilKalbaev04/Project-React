import Catalog from "./components/Catalog";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
