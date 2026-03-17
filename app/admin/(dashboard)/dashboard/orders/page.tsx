'use client'
import React, { useState } from 'react'
import OrderCard from '@/components/OrderCard'

const orders = () => {

  const [orders] = useState([
    { id: 1, cliente: "Juan", total: 25, estado: "pendiente", pedido: "25 piezas de sushi" },
    { id: 2, cliente: "Ana", total: 40, estado: "preparando", pedido: "40 piezas de sushi" },
  ]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export default orders