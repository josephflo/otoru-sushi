import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/ui/columns";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "a1b2c3d4",
      amount: 250,
      status: "processing",
      email: "juan@gmail.com",
    },
    {
      id: "e5f6g7h8",
      amount: 500,
      status: "success",
      email: "maria@hotmail.com",
    },
    {
      id: "i9j0k1l2",
      amount: 75,
      status: "failed",
      email: "pedro@yahoo.com",
    },
    {
      id: "m3n4o5p6",
      amount: 320,
      status: "success",
      email: "ana@gmail.com",
    },
    {
      id: "q7r8s9t0",
      amount: 150,
      status: "pending",
      email: "lucas@outlook.com",
    },
    {
      id: "u1v2w3x4",
      amount: 890,
      status: "processing",
      email: "sofia@gmail.com",
    },
    {
      id: "y5z6a7b8",
      amount: 60,
      status: "failed",
      email: "diego@hotmail.com",
    },
    {
      id: "c9d0e1f2",
      amount: 430,
      status: "success",
      email: "carla@gmail.com",
    },
    {
      id: "g3h4i5j6",
      amount: 210,
      status: "pending",
      email: "franco@yahoo.com",
    },
  ];
}
export default async function page() {
  const data = await getData();

  return (
    <section className="container mx-auto py-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </section>
  );
}
