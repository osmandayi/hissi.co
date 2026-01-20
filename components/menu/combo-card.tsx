"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ComboItem } from "@/lib/menu-data";

interface ComboCardProps {
  combo: ComboItem;
  index: number;
}

export function ComboCard({ combo, index }: ComboCardProps) {
  const discount = Math.round(((combo.originalPrice - combo.price) / combo.originalPrice) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={combo.image || "/placeholder.svg"}
          alt={combo.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
          %{discount} İndirim
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-xl font-bold text-white drop-shadow-lg">
            {combo.name}
          </h3>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {combo.description}
        </p>
        
        <div className="space-y-1.5 mb-4">
          {combo.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">{combo.price} ₺</span>
            <span className="text-sm text-muted-foreground line-through">{combo.originalPrice} ₺</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
