"use client";

import { motion } from "framer-motion";

import { site } from "@/lib/data/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsapp.href}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.5 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-shadow hover:shadow-xl md:bottom-8 md:left-8"
      aria-label="Discuter sur WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02-.2 0-.51.08-.78.37-.26.29-1.02 1-1.02 2.42 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.96 4.39.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34Z" />
        <path d="M12.02 2.01c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.44 1.33 4.93L2 22l5.24-1.37a9.9 9.9 0 0 0 4.78 1.22h.01c5.5 0 9.96-4.46 9.96-9.96s-4.46-9.88-9.97-9.88Zm0 18.1h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.41 5.84c0 4.55-3.71 8.22-8.26 8.22Z" />
      </svg>
    </motion.a>
  );
}
