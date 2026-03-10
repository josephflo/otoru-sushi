export default function ProductGrid() {
  const products = new Array(8).fill(null);

  return (
    <section className="py-16 px-6 bg-dark">
      {/* Caja visual responsive */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Nuestros Rolls
        </h3>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-200 rounded mb-4" />
              <h4 className="font-semibold mb-2">Roll Especial {i + 1}</h4>
              <p className="text-sm mb-4">$12.99</p>
              <button className="w-full bg-primary text-white py-2 rounded">
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}