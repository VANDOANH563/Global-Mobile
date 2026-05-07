export default function App() {
  const products = [
    {
      name: "iPhone 15 Pro Max",
      price: "28.990.000đ",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    },
    {
      name: "iPhone 14 Pro",
      price: "21.500.000đ",
      image:
        "https://images.unsplash.com/photo-1678652197831-2d180705cd2c",
    },
    {
      name: "iPhone 13",
      price: "15.990.000đ",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-lime-400">
            GLOBAL MOBILE
          </h1>

          <nav className="hidden md:flex gap-8 text-zinc-300">
            <a href="#">Trang chủ</a>
            <a href="#">iPhone</a>
            <a href="#">Khuyến mãi</a>
            <a href="#">Liên hệ</a>
          </nav>

          <button className="bg-lime-400 text-black px-5 py-2 rounded-xl font-bold">
            Mua ngay
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lime-400 font-semibold mb-3">
            Hệ thống điện thoại quốc tế
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            iPhone Chính Hãng
            <span className="text-lime-400"> Giá Tốt</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-8">
            Chuyên iPhone mới 100%, máy quốc tế, bảo hành uy tín,
            hỗ trợ trả góp toàn quốc.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-lime-400 text-black px-6 py-3 rounded-2xl font-bold">
              Xem sản phẩm
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-2xl">
              Liên hệ Zalo
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1592286630032-8b4f0e3f2f7f"
            alt="iphone"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-4xl font-bold">Sản phẩm nổi bật</h3>

          <button className="text-lime-400">
            Xem tất cả
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-2xl h-72 w-full object-cover"
              />

              <div className="mt-5">
                <h4 className="text-2xl font-bold mb-2">
                  {item.name}
                </h4>

                <p className="text-lime-400 text-xl font-bold mb-4">
                  {item.price}
                </p>

                <button className="w-full bg-lime-400 text-black py-3 rounded-2xl font-bold">
                  Mua ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 rounded-3xl p-10 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-5xl font-black text-lime-400 mb-3">
              10K+
            </h4>
            <p className="text-zinc-400">Khách hàng toàn quốc</p>
          </div>

          <div>
            <h4 className="text-5xl font-black text-lime-400 mb-3">
              100%
            </h4>
            <p className="text-zinc-400">Máy chính hãng</p>
          </div>

          <div>
            <h4 className="text-5xl font-black text-lime-400 mb-3">
              24/7
            </h4>
            <p className="text-zinc-400">Hỗ trợ khách hàng</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-zinc-500">
          © 2026 GLOBAL MOBILE - Website bán iPhone chuyên nghiệp.
        </div>
      </footer>
    </div>
  );
}
