import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={imageUrl}
          alt="AIRON Premium Basics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 tracking-[0.05em]"
            style={{ fontFamily: 'Karla, sans-serif', fontSize: '24px', lineHeight: '32px', fontWeight: 400 }}
          >
            New minimalist long-sleeve essentials
          </motion.p>
          <motion.a
            href="#lookbook"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#lookbook');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block px-6 py-2 border border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: 'Karla, sans-serif', fontSize: '20px', lineHeight: '23px', fontWeight: 500 }}
          >
            View in Catalog
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-white/60 animate-pulse" />
      </motion.div>
    </section>
  );
}