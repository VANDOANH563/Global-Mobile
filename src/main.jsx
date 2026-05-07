import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {

  const piRate = 50000;

  const products = [
    {
      name: "iPhone 15 Pro Max",
      vnd: 28990000,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    },

    {
      name: "iPhone 14 Pro",
      vnd: 21500000,
      image:
        "https://images.unsplash.com/photo-1678652197831-2d180705cd2c",
    },

    {
      name: "iPhone 13",
      vnd: 15990000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      name: "Samsung S24 Ultra",
      vnd: 24990000,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    },

    {
      name: "AirPods Pro",
      vnd: 5900000,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
    },

    {
      name: "Apple Watch Ultra",
      vnd: 18990000,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    },
  ];

  return (
    <div className="container">

      <header className="header">
        <h1>GLOBAL MOBILE</h1>

        <p>
          Thanh toán bằng Pi Network
        </p>

        <p className="rate">
          1 PI = 50.000 VNĐ
        </p>
      </header>

      <div className="products">

        {products.map((item, index) => {

          const piPrice = (item.vnd / piRate).toFixed(2);

          return (
            <div className="card" key={index}>

              <img src={item.image} alt="" />

              <h2>{item.name}</h2>

              <p className="vnd">
                {item.vnd.toLocaleString("vi-VN")}đ
              </p>

              <p className="pi">
                ≈ {piPrice} PI
              </p>

              <button>
                Thanh toán bằng PI
              </button>

            </div>
          );
        })}

      </div>

      <footer>
        © 2026 GLOBAL MOBILE
      </footer>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
