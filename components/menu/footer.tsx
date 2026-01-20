"use client";

import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function MenuFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-card border-t border-border mt-8"
    >
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Bizi Ziyaret Edin</h3>
          <p className="text-sm text-muted-foreground">Sıcak bir atmosferde, lezzetli bir deneyim</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-muted rounded-full flex-shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Adres</p>
              <p className="text-sm text-muted-foreground">Örnek Mahallesi, Kahve Sokak No:1, İstanbul</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-muted rounded-full flex-shrink-0">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Çalışma Saatleri</p>
              <p className="text-sm text-muted-foreground">Her gün 08:00 - 23:00</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-muted rounded-full flex-shrink-0">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Telefon</p>
              <p className="text-sm text-muted-foreground">+90 (212) 123 45 67</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 pt-6 border-t border-border">
          <a 
            href="https://instagram.com/hissi.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@hissi.co</span>
          </a>
        </div>
      </div>
      
      <div className="bg-muted/50 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 hissi.co - Tüm hakları saklıdır
        </p>
      </div>
    </motion.footer>
  );
}
