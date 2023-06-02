import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <div className="App">
            <Routes>
              <Route path="/" element={<Shop />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </div>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
