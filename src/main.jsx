import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {

  const products = [
    {
      ten: "iPhone 15 Pro Max",
      gia: 28990000,
      hinh: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
    },
    {
      ten: "iPhone 14 Pro",
      gia: 21500000,
      hinh: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c"
    },
    {
      ten: "iPhone 13",
      gia: 15990000,
      hinh: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      ten: "Samsung S24 Ultra",
      gia: 24990000,
      hinh: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },
    {
      ten: "iPhone 12 Pro Max",
      gia: 13990000,
      hinh: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd"
    },
    {
      ten: "iPhone 11",
      gia: 8990000,
      hinh: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2"
    }
  ];

  return (
    <div className="container">

      <div className="top-banner">
        🔥 THANH TOÁN BẰNG PI NETWORK 🔥
      </div>

      <h1>GLOBAL MOBILE</h1>

      <p className="sub">
        Shop điện thoại quốc tế - Giá tốt toàn cầu
      </p>

      <p className="pi-price">
        1 PI = 50.000 VNĐ
      </p>
<div className="hero">
  <h2>iPhone Chính Hãng Quốc Tế</h2>

  <p>
    Trả góp • Thanh toán PI • Bảo hành toàn cầu
  </p>

  <button className="hero-btn">
    Mua ngay
  </button>
</div>
      <input
        className="search"
        placeholder="Tìm kiếm điện thoại..."
      />

      <div className="products">

        {products.map((sp, index) => {

          const pi = (sp.gia / 50000).toFixed(2);

          return (
            <div className="card" key={index}>

              <img src={sp.hinh} alt="" />

              <h2>{sp.ten}</h2>

              <p className="gia">
                {sp.gia.toLocaleString()}đ
              </p>

              <p className="pi">
                ≈ {pi} PI
              </p>

              <p className="stock">
                ✔ Còn hàng
              </p>

             <button
  className="buy-btn"
  onClick={() => {
    alert(
`🪙 THANH TOÁN PI NETWORK

📱 Sản phẩm: ${sp.ten}
💰 Giá: ${sp.gia}đ
🪙 Số PI cần gửi: ≈ ${pi} PI

📬 ĐỊA CHỈ VÍ PI:
GBHGRNUU7645UJJNOKUIUSBEJUDNU4IW4YN5ZA72M4WSPP62MIENCAVL

📌 Nội dung chuyển:
MUA-${sp.ten}

✅ Sau khi thanh toán:
• Đơn sẽ được xác nhận tự động
• Shop đóng gói trong 24h
• Gửi bưu điện toàn quốc

☎ Hỗ trợ: 09xxxxxxxx`
    );
  }}
>
  Thanh toán bằng PI
</button> <button
  className="buy-btn"
  onClick={() => {
    alert(
      `✅ Đã nhận thanh toán Pi thành công!

📦 Đơn hàng: ${sp.ten}
💰 Giá: ${sp.gia}đ
🪙 Số PI: ≈ ${pi} PI

🚚 Đơn hàng sẽ được đóng gói và gửi bưu điện trong 24h.
📞 Nhân viên sẽ liên hệ xác nhận địa chỉ giao hàng.`
    );
  }}
>
  Thanh toán bằng PI
</button>
          );

        })}

      </div>

      <div className="footer">
        GLOBAL MOBILE © 2026 <br />
        Hỗ trợ thanh toán bằng Pi Network
      </div>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
  
