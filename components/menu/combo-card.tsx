"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import type { ComboItem } from "@/lib/menu-data";

interface ComboCardProps {
  combo: ComboItem;
  index: number;
}

export function ComboCard({ combo, index }: ComboCardProps) {
  const discount = Math.round(
    ((combo.originalPrice - combo.price) / combo.originalPrice) * 100
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-linear-to-br from-card to-muted/30 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
    >
      <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
        <Sparkles className="w-3 h-3" />%{discount} İndirim
      </div>

      <div className="p-4 pt-5">
        <h3 className="font-serif text-lg font-bold text-foreground mb-1">
          {combo.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {combo.description}
        </p>

        <div className="space-y-1.5 mb-4 bg-muted/50 rounded-lg p-3">
          {combo.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              {combo.price} ₺
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {combo.originalPrice} ₺
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
