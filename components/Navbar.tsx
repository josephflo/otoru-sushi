export default function Navbar({ setCartOpen }: any) {
  return (
    <nav className="fixed top-0 w-full bg-dark text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">OtoruSushi</h1>
        <button
          onClick={() => setCartOpen(true)}
          className="bg-primary px-4 py-2 rounded-md"
        >
          Carrito
        </button>
      </div>
    </nav>
  );
}