import { motion } from "motion/react";
import { ProductCard } from "./ProductCard";

interface ColorVariant {
  name: string;
  hex: string;
  imageUrl: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  colors: ColorVariant[];
  ozonLink: string;
}

interface LookbookGridProps {
  products: Product[];
  title: string;
}

export function LookbookGrid({ products, title }: LookbookGridProps) {
  return (
    <section id="lookbook" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 tracking-[0.2em]"
          style={{ fontSize: "3rem", fontWeight: 300 }}
        >
          {title}
        </motion.h2>

        <div>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              colors={product.colors}
              ozonLink={product.ozonLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}