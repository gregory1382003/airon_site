import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ColorVariant {
  name: string;
  hex: string;
  imageUrl: string;
}

interface ProductCardProps {
  title: string;
  description: string;
  colors: ColorVariant[];
  ozonLink: string;
  index: number;
}

export function ProductCard({ title, description, colors, ozonLink, index }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32"
    >
      {/* Image - Left */}
      <div className="relative overflow-hidden aspect-[3/4] group">
        <ImageWithFallback
          src={colors[selectedColor].imageUrl}
          alt={`${title} - ${colors[selectedColor].name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content - Right */}
      <div className="flex flex-col justify-center">
        <h3
          className="mb-4 tracking-[0.15em]"
          style={{ fontFamily: 'Karla, sans-serif', fontSize: '2rem', fontWeight: 500 }}
        >
          {title}
        </h3>
        <p
          className="text-gray-600 mb-8 leading-relaxed"
          style={{ fontSize: '1rem', fontWeight: 300 }}
        >
          {description}
        </p>

        {/* Color Selector */}
        <div className="mb-8">
          <p
            className="mb-4 tracking-wide text-gray-700"
            style={{ fontSize: '0.875rem', fontWeight: 400 }}
          >
            Available Colors
          </p>
          <div className="flex gap-3">
            {colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(idx)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === idx
                    ? "border-black scale-110"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>

        {/* Link to Ozon */}
        <a
          href={ozonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black px-8 py-3 text-black hover:bg-black hover:text-white transition-all duration-300 text-center"
          style={{ fontFamily: 'Karla, sans-serif', fontSize: '16px', fontWeight: 500 }}
        >
          View on Ozon
        </a>
      </div>
    </motion.div>
  );
}
