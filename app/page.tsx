"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import {CarouselPlugin} from "@/components/Carousel";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bone">
      <Navbar setCartOpen={setCartOpen} />
      <Hero />
      <CarouselPlugin />
      <ProductGrid />
      <Footer />
      <CartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </main>
  );
}