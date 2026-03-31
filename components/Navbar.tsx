import Link from "next/link";

export default function Navbar({ setCartOpen }: any) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white text-black">
      <h1 className="font-bold text-xl text-orange-500">OTORO SUSHI</h1>
      <div className="flex gap-6">
        <Link href="#">Inicio</Link>
        <Link href="#productos">Menú</Link>
        <Link href="#about">Nosotros</Link>
        <Link href="#contacto">Contacto</Link><button
          onClick={() => setCartOpen(true)}
          className="bg-primary px-4 py-2 rounded-md"
        >
          Carrito
        <Link href="/carrito">🛒</Link>
        </button>
      </div>
    </nav>
  );
}
