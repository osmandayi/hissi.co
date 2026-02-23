"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { MenuItem } from "@/lib/menu-data";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  const hasSize = item.priceSmall !== undefined && item.priceLarge !== undefined;
  const isFeatured = item.image && (item.isNew || item.isPopular);

  if (isFeatured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.04 }}
        className="group relative bg-card rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex gap-4 p-3">
          {/* Görsel */}
          <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden">
            <Image
              src={item.image! || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="96px"
            />
            {/* Etiketler görsel üzerinde */}
            <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
              {item.isNew && (
                <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  YENİ
                </span>
              )}
              {item.isPopular && !item.isNew && (
                <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  FAVORİ
                </span>
              )}
            </div>
          </div>

          {/* İçerik */}
          <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
            <div>
              <h3 className="font-serif font-semibold text-foreground text-base leading-tight">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>

            {/* Fiyat */}
            <div className="mt-2">
              {hasSize ? (
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground text-xs">{item.sizeLabels?.small}</span>
                    <span className="font-bold text-primary">{item.priceSmall} ₺</span>
                  </div>
                  <span className="text-border">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground text-xs">{item.sizeLabels?.large}</span>
                    <span className="font-bold text-primary">{item.priceLarge} ₺</span>
                  </div>
                </div>
              ) : (
                <span className="text-lg font-bold text-primary">
                  {item.price} ₺
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Kompakt kart (görselsiz)
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      className="group relative bg-card/60 rounded-xl overflow-hidden border border-border/30 hover:border-border/60 hover:bg-card transition-all duration-200"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-foreground text-[15px] leading-tight">
              {item.name}
            </h3>
            {item.isNew && (
              <span className="bg-accent/20 text-accent text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                Yeni
              </span>
            )}
            {item.isPopular && !item.isNew && (
              <span className="bg-primary/10 text-primary text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
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
                <span className="text-muted-foreground text-[10px]">{item.sizeLabels?.small}</span>
                <span className="font-semibold text-primary min-w-11.25 text-right">{item.priceSmall} ₺</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground text-[10px]">{item.sizeLabels?.large}</span>
                <span className="font-semibold text-primary min-w-11.25 text-right">{item.priceLarge} ₺</span>
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
