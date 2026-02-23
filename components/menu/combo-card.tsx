"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import type { ComboItem } from "@/lib/menu-data";

interface ComboCardProps {
  combo: ComboItem;
  index: number;
}

export function ComboCard({ combo, index }: ComboCardProps) {
  const discount = combo.originalPrice - combo.price;
  const discountPercent = Math.round((discount / combo.originalPrice) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-linear-to-br from-card via-card to-secondary/30 rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex gap-4 p-4">
        {/* Görsel */}
        {combo.image && (
          <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-md">
            <Image
              src={combo.image || "/placeholder.svg"}
              alt={combo.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="112px"
            />
            {/* İndirim rozeti */}
            <div className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl shadow-lg">
              %{discountPercent}
            </div>
          </div>
        )}

        {/* İçerik */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <h3 className="font-serif font-bold text-foreground text-lg leading-tight">
                {combo.name}
              </h3>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {combo.description}
            </p>

            {/* İçindekiler */}
            <div className="mt-2 space-y-1">
              {combo.items.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-foreground/80">
                  <Check className="w-3 h-3 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fiyatlar */}
          <div className="flex items-end gap-2 mt-3">
            <span className="text-xl font-bold text-primary">
              {combo.price} ₺
            </span>
            <span className="text-sm text-muted-foreground line-through mb-0.5">
              {combo.originalPrice} ₺
            </span>
            <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full ml-auto">
              {discount} ₺ tasarruf
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
