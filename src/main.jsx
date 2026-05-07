import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="container">
      <h1>GLOBAL MOBILE</h1>
      <p className="sub">Chuyên bán iPhone chính hãng</p>

      <div className="products">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569"
            alt=""
          />
          <h2>iPhone 15 Pro Max</h2>
          <p>28.000.000đ</p>
          <button>Mua ngay</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
