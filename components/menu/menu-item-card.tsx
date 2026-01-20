"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MenuItem } from "@/lib/menu-data";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md duration-300 transition-colors hover:text-foreground hover:bg-muted"
    >
      <div className="flex gap-4 p-4">
        <div className="relative w-24 h-24 rounded-xl overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {item.isNew && (
            <div className="absolute top-1 left-1 bg-accent text-accent-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
              Yeni
            </div>
          )}
          {item.isPopular && (
            <div className="absolute top-1 left-1 bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
              Popüler
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-semibold text-primary">
              {item.price} ₺
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
