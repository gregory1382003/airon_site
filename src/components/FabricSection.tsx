import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FabricSectionProps {
  imageUrl: string;
}

export function FabricSection({ imageUrl }: FabricSectionProps) {
  return (
    <section className="py-32 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src={imageUrl}
                alt="Premium fabric texture"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2
              className="tracking-[0.15em]"
              style={{ fontSize: "2.5rem", fontWeight: 300 }}
            >
              Fabric & Craftsmanship
            </h2>
            <div className="space-y-6">
              <div>
                <h3
                  className="mb-2 tracking-widest"
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  PREMIUM MATERIALS
                </h3>
                <p
                  className="text-gray-600 leading-relaxed tracking-wide"
                  style={{ fontSize: "1rem", fontWeight: 300 }}
                >
                  Every piece is crafted from carefully selected premium cotton and natural fibers, chosen for their exceptional softness and durability.
                </p>
              </div>
              <div>
                <h3
                  className="mb-2 tracking-widest"
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  ENGINEERED FIT
                </h3>
                <p
                  className="text-gray-600 leading-relaxed tracking-wide"
                  style={{ fontSize: "1rem", fontWeight: 300 }}
                >
                  Precision-tailored patterns designed for the modern silhouette. Each garment is refined through countless iterations to achieve the perfect drape and comfort.
                </p>
              </div>
              <div>
                <h3
                  className="mb-2 tracking-widest"
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  LASTING QUALITY
                </h3>
                <p
                  className="text-gray-600 leading-relaxed tracking-wide"
                  style={{ fontSize: "1rem", fontWeight: 300 }}
                >
                  Built to endure. Our garments maintain their form, color, and texture through years of wear and wash cycles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
