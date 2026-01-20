"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MenuItemCard } from "./menu-item-card";
import { ComboCard } from "./combo-card";
import { coffeeItems, dessertItems, chefCombos } from "@/lib/menu-data";
import { Coffee, Cake, Sparkles } from "lucide-react";

interface MenuSectionProps {
  activeCategory: string;
}

export function MenuSection({ activeCategory }: MenuSectionProps) {
  return (
    <div className="px-4 py-6">
      <AnimatePresence mode="wait">
        {activeCategory === "coffee" && (
          <motion.div
            key="coffee"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-full">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Kahveler</h2>
                <p className="text-sm text-muted-foreground">Özenle hazırlanan kahve seçeneklerimiz</p>
              </div>
            </div>
            <div className="space-y-3">
              {coffeeItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {activeCategory === "dessert" && (
          <motion.div
            key="dessert"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-full">
                <Cake className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Tatlılar</h2>
                <p className="text-sm text-muted-foreground">El yapımı taze tatlılarımız</p>
              </div>
            </div>
            <div className="space-y-3">
              {dessertItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {activeCategory === "combos" && (
          <motion.div
            key="combos"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/20 rounded-full">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Şefin Tavsiyeleri</h2>
                <p className="text-sm text-muted-foreground">Özel kombinasyonlar, özel fiyatlar</p>
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
