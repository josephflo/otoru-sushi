import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Order = {
  id: number
  cliente: string
  total: number
  estado: string
  pedido: string
}

export default function OrderCard( { order }: { order: Order }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src="/images/sushi3.avif"
        alt="Event cover"
        className="my-4 relative z-20 aspect-video w-full object-cover rounded-xl"
      />
      <CardHeader>
        <CardAction>
          <Badge  className="shadow-2xl" variant="default">En preparacion</Badge>
        </CardAction>
        <CardTitle>{order.cliente}</CardTitle>
        <CardDescription>
          {order.pedido}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Ver pedido</Button>
      </CardFooter>
    </Card>
  )
}
