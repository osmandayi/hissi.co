"use client";

import { useState } from "react";
import { MenuHeader } from "@/components/menu/header";
import { CategoryTabs } from "@/components/menu/category-tabs";
import { MenuSection } from "@/components/menu/menu-section";
import { MenuFooter } from "@/components/menu/footer";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("coffees");

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-background min-h-screen shadow-xl">
        <MenuHeader />
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <MenuSection activeCategory={activeCategory} />
        <MenuFooter />
      </div>
    </main>
  );
}
