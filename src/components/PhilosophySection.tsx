import { motion } from "motion/react";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 tracking-[0.2em]"
          style={{ fontSize: "3rem", fontWeight: 300 }}
        >
          Our Philosophy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p
            className="text-gray-700 leading-loose tracking-wide"
            style={{ fontSize: "1.25rem", fontWeight: 300 }}
          >
            In a world of fleeting trends, we believe in creating pieces that transcend time.
            AIRON represents a return to essentials — garments that form the foundation
            of a thoughtful wardrobe.
          </p>
          <p
            className="text-gray-700 leading-loose tracking-wide"
            style={{ fontSize: "1.25rem", fontWeight: 300 }}
          >
            Our commitment is to quality over quantity, substance over spectacle.
            Each piece is designed with intention, crafted with care, and built to last.
          </p>
          <p
            className="text-gray-700 leading-loose tracking-wide"
            style={{ fontSize: "1.25rem", fontWeight: 300 }}
          >
            This is fashion without compromise. This is AIRON.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div>
            <h3
              className="mb-3 tracking-[0.15em]"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              TIMELESS
            </h3>
            <p
              className="text-gray-600 tracking-wide"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Designs that remain relevant season after season
            </p>
          </div>
          <div>
            <h3
              className="mb-3 tracking-[0.15em]"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              ESSENTIAL
            </h3>
            <p
              className="text-gray-600 tracking-wide"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Core pieces that elevate every wardrobe
            </p>
          </div>
          <div>
            <h3
              className="mb-3 tracking-[0.15em]"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              REFINED
            </h3>
            <p
              className="text-gray-600 tracking-wide"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Understated elegance in every detail
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
