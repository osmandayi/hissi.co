"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MenuItemCard } from "./menu-item-card";
import { ComboCard } from "./combo-card";
import {
  menuGroups,
  chefCombos,
  type MenuCategory,
  type MenuItem,
} from "@/lib/menu-data";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface MenuSectionProps {
  activeCategory: string;
}

function CategorySection({ category }: { category: MenuCategory }) {
  // Önce featured (görsel + etiketli) ürünler, sonra diğerleri
  const featuredItems = category.items.filter(
    (item) => item.image && (item.isNew || item.isPopular),
  );
  const regularItems = category.items.filter(
    (item) => !item.image || (!item.isNew && !item.isPopular),
  );
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4 px-1">
        {category.icon.includes(".png") ? (
          <Image
            src={category.icon || "/placeholder.svg"}
            alt={category.name}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            width={20}
            height={20}
          />
        ) : (
          <span className="text-lg">{category.icon}</span>
        )}
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {category.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-border/60 to-transparent ml-2" />
      </div>

      {/* Featured ürünler - görselli kartlar */}
      {featuredItems.length > 0 && (
        <div className="grid gap-3 mb-3">
          {featuredItems.map((item, index) => (
            <MenuItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      )}

      {/* Regular ürünler - kompakt liste */}
      {regularItems.length > 0 && (
        <div className="space-y-2">
          {regularItems.map((item, index) => (
            <MenuItemCard
              key={item.id}
              item={item}
              index={featuredItems.length + index}
            />
          ))}
        </div>
      )}
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
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-full">
                {activeGroup.icon.includes(".png") ? (
                  <Image
                    src={activeGroup.icon! || "/placeholder.svg"}
                    alt={activeGroup.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    width={30}
                    height={30}
                  />
                ) : (
                  <span className="text-xl">{activeGroup.icon}</span>
                )}
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {activeGroup.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {activeGroup.categories.length} kategori,{" "}
                  {activeGroup.categories.reduce(
                    (acc, cat) => acc + cat.items.length,
                    0,
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
            <div className="flex items-center gap-3 mb-6">
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
