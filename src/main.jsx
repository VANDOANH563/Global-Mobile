import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="container">
      <h1>GLOBAL MOBILE</h1>

      <p className="sub">
        Chuyên bán iPhone chính hãng giá tốt
      </p>

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

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1678652197831-2d180705cd2c"
            alt=""
          />

          <h2>iPhone 14 Pro</h2>

          <p>21.000.000đ</p>

          <button>Mua ngay</button>
        </div>

      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
<div className="card">
  <img
    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    alt=""
  />

  <h2>iPhone 13</h2>

  <p>15.000.000đ</p>

  <button>Mua ngay</button>
</div>
