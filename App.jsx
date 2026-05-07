export default function App() {
  const products = [
    {
      name: 'iPhone 15 Pro Max',
      price: '28.990.000đ',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d7f38?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Samsung S24 Ultra',
      price: '25.490.000đ',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'iPhone 14',
      price: '16.990.000đ',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-black text-white p-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Di Động Toàn Cầu</h1>
          <div className="flex gap-5">
            <a href="#products">Sản phẩm</a>
            <a href="#contact">Liên hệ</a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Điện thoại quốc tế giá tốt
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              iPhone - Samsung - Xiaomi - Ship toàn quốc
            </p>

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold">
              Mua ngay
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-10">Sản phẩm nổi bật</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3">{product.name}</h4>
                <p className="text-red-600 text-xl font-semibold mb-5">
                  {product.price}
                </p>

                <button className="w-full bg-black text-white py-3 rounded-2xl">
                  Liên hệ mua
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-black text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h5 className="text-2xl font-bold mb-4">Liên hệ</h5>
          <p>Zalo: 0123456789</p>
          <p>Facebook: fb.com/didongtoancau</p>
        </div>
      </footer>
    </div>
  )
}
