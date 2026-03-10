export default function CartDrawer({ cartOpen, setCartOpen }: any) {
  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h3 className="text-lg font-bold">Tu Pedido</h3>
          <button onClick={() => setCartOpen(false)}>X</button>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-500">
            Aquí aparecerán los productos agregados.
          </p>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t">
          <button className="w-full bg-primary text-white py-3 rounded-lg">
            Finalizar compra
          </button>
        </div>
      </div>
    </>
  );
}