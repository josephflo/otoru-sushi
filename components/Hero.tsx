export default function Hero() {
  return (
    <section className="pt-24 min-h-[80vh] flex items-center justify-center bg-primary text-white px-6">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Sushi auténtico japonés
        </h2>
        <p className="mb-6 text-lg">
          El arte en cada bocado.
        </p>
        <button className="bg-wasabi text-dark px-6 py-3 rounded-lg font-semibold">
          Ordenar ahora
        </button>
      </div>
    </section>
  );
}