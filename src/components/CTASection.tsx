import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CTASectionProps {
  imageUrl: string;
}

export function CTASection({ imageUrl }: CTASectionProps) {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={imageUrl}
          alt="AIRON Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative h-full flex items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2
            className="text-white mb-8 tracking-[0.15em]"
            style={{ fontSize: "2.5rem", fontWeight: 300 }}
          >
            Discover the Collection
          </h2>
          <a
            href="https://www.ozon.ru/seller/airon-1577595/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-white text-black tracking-[0.15em] hover:bg-black hover:text-white border border-white transition-all duration-300"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            Shop on Ozon
          </a>
        </motion.div>
      </div>
    </section>
  );
}
