"use client";

import { motion } from "framer-motion";
import { Coffee, Cake, Sparkles } from "lucide-react";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "coffee", label: "Kahveler", icon: Coffee },
  { id: "dessert", label: "Tatlılar", icon: Cake },
  { id: "combos", label: "Şefin Tavsiyeleri", icon: Sparkles },
];

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="flex justify-center gap-1 p-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                transition-colors duration-200
                ${isActive 
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
              <Icon className="relative z-10 w-4 h-4" />
              <span className="relative z-10">{category.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
