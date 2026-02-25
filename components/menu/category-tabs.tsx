"use client";

import { motion } from "framer-motion";
import { Coffee, Cake, Sparkles, GlassWater } from "lucide-react";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "coffees", label: "Kahveler", icon: Coffee },
  { id: "desserts", label: "Tatlılar", icon: Cake },
  { id: "drinks", label: "İçecekler", icon: GlassWater },
  { id: "combos", label: "Tavsiyeler", icon: Sparkles },
];

export function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="flex justify-center md:gap-1 md:px-2 px-0 py-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              type="button"
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                relative flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium
                transition-colors duration-200 whitespace-nowrap shrink-0
                ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="relative z-10 w-3.5 h-3.5" />
              <span className="relative z-10">{category.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
