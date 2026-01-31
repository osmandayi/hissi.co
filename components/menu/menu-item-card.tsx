"use client";

import { motion } from "framer-motion";
import type { MenuItem } from "@/lib/menu-data";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  const hasSize = item.priceSmall !== undefined && item.priceLarge !== undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-border hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-foreground text-[15px] leading-tight">
              {item.name}
            </h3>
            {item.isNew && (
              <span className="bg-accent/20 text-accent-foreground text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                Yeni
              </span>
            )}
            {item.isPopular && (
              <span className="bg-primary/15 text-primary text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                Favori
              </span>
            )}
          </div>
          {item.description && (
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
              {item.description}
            </p>
          )}
        </div>

        <div className="shrink-0 text-right">
          {hasSize ? (
            <div className="flex flex-col items-end gap-0.5">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground text-xs">{item.sizeLabels?.small}</span>
                <span className="font-semibold text-primary min-w-12.5 text-right">{item.priceSmall} ₺</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground text-xs">{item.sizeLabels?.large}</span>
                <span className="font-semibold text-primary min-w-12.5 text-right">{item.priceLarge} ₺</span>
              </div>
            </div>
          ) : (
            <span className="text-base font-semibold text-primary">
              {item.price} ₺
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
