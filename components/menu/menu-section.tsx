"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MenuItemCard } from "./menu-item-card";
import { ComboCard } from "./combo-card";
import {
  menuGroups,
  chefCombos,
  type MenuCategory,
} from "@/lib/menu-data";
import { Sparkles } from "lucide-react";

interface MenuSectionProps {
  activeCategory: string;
}

function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3 px-1">
        {
          category.icon.includes('.png') ? (
            <img src={category.icon} alt="" className="w-8 h-8" />
          ) : (
            <span className="text-lg">{category.icon}</span>
          )
        }
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {category.name}
        </h3>
        <div className="flex-1 h-px bg-border/60 ml-2" />
      </div>
      <div className="space-y-2">
        {category.items.map((item, index) => (
          <MenuItemCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export function MenuSection({ activeCategory }: MenuSectionProps) {
  const activeGroup = menuGroups.find((g) => g.id === activeCategory);

  return (
    <div className="px-4 py-5">
      <AnimatePresence mode="wait">
        {activeGroup && (
          <motion.div
            key={activeGroup.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-primary/10 rounded-full">
              {
                activeGroup.icon.includes('.png') ? (
                  <img src={activeGroup.icon} alt="" className="w-6 h-6" />
                ) : (
                  <span className="text-xl">{activeGroup.icon}</span>
                )
              }
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {activeGroup.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {activeGroup.categories.length} kategori,{" "}
                  {activeGroup.categories.reduce(
                    (acc, cat) => acc + cat.items.length,
                    0
                  )}{" "}
                  ürün
                </p>
              </div>
            </div>

            {activeGroup.categories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </motion.div>
        )}

        {activeCategory === "combos" && (
          <motion.div
            key="combos"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-accent/20 rounded-full">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Şefin Tavsiyeleri
                </h2>
                <p className="text-sm text-muted-foreground">
                  Özel kombinasyonlar, özel fiyatlar
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {chefCombos.map((combo, index) => (
                <ComboCard key={combo.id} combo={combo} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
