"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Bike,
  Settings,
} from "lucide-react";

const navItems = [
  {
    name: "Órdenes",
    href: "/admin/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    name: "Clientes",
    href: "/admin/dashboard/customers",
    icon: Users,
  },
  {
    name: "Riders",
    href: "/admin/dashboard/riders",
    icon: Bike,
  },
  {
    name: "Configuración",
    href: "/admin/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white">
      {/* SIDEBAR */}
      <aside className="w-[260px] flex flex-col border-r border-[#2a0a0a] bg-gradient-to-b from-[#0f0f0f] via-[#1a0a0a] to-[#0a0a0a]">
        
        {/* LOGO */}
        <div className="h-[70px] flex items-center px-6 border-b border-[#2a0a0a]">
          <h1 className="text-lg font-semibold tracking-wide text-[#e11d48]">
            Otoru Admin
          </h1>
        </div>

        {/* NAV */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all
                  
                  ${
                    isActive
                      ? "bg-[#2a0a0a] text-white"
                      : "text-gray-400 hover:bg-[#1a0a0a] hover:text-white"
                  }
                `}
              >
                <item.icon
                  size={18}
                  className={`transition-colors ${
                    isActive ? "text-[#e11d48]" : "text-gray-500 group-hover:text-[#e11d48]"
                  }`}
                />

                {item.name}
              </Link>
            );
          })}
        </nav>

        <footer className="p-4 border-t border-[#2a0a0a] text-xs text-gray-500">
          Panel administrativo · Sushi
        </footer>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-[#0a0a0a] via-dark to-[#1a0a0a] p-6">
        {children}
      </main>
    </div>
  );
}