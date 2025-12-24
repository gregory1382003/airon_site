import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-3 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-sm" : isHovered ? "bg-black/10 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto relative flex items-center justify-between">
          {/* Desktop Navigation - Left side */}
          <div className="hidden md:flex gap-12 items-center flex-1">
            <a
              href="#lookbook"
              onClick={(e) => handleSmoothScroll(e, '#lookbook')}
              className={`hover:opacity-60 transition-opacity duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
              style={{ fontFamily: 'Karla, sans-serif', fontSize: '20px', lineHeight: '23px', fontWeight: 500 }}
            >
              LOOKBOOK
            </a>
            <a
              href="#philosophy"
              onClick={(e) => handleSmoothScroll(e, '#philosophy')}
              className={`hover:opacity-60 transition-opacity duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
              style={{ fontFamily: 'Karla, sans-serif', fontSize: '20px', lineHeight: '23px', fontWeight: 500 }}
            >
              PHILOSOPHY
            </a>
          </div>

          {/* Mobile - Empty space for balance */}
          <div className="flex md:hidden" style={{ width: '48px' }}></div>
          
          {/* Logo - Center */}
          <div className={`absolute left-1/2 -translate-x-1/2 tracking-[0.3em] transition-colors duration-500 z-[60] ${
            scrolled ? "text-black" : "text-white"
          }`} style={{ fontSize: '28px', fontWeight: 500 }}>
            AIRON
          </div>
          
          {/* Desktop - View on Ozon - Right side */}
          <div className="hidden md:flex justify-end flex-1">
            <a
              href="https://www.ozon.ru/seller/airon-1577595/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-60 transition-opacity duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
              style={{ fontFamily: 'Karla, sans-serif', fontSize: '20px', lineHeight: '23px', fontWeight: 500 }}
            >
              VIEW ON OZON
            </a>
          </div>

          {/* Mobile Menu Button - Right side */}
          <div className="flex md:hidden justify-end" style={{ width: '48px' }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden shadow-lg"
            style={{ height: 'auto', maxHeight: '70vh' }}
          >
            {/* Close Button - Black Square with X */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-8 w-12 h-12 bg-black flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              aria-label="Close menu"
            >
              <X size={24} className="text-white" strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center gap-12 pt-32 pb-16"
            >
              <a
                href="#lookbook"
                onClick={(e) => handleSmoothScroll(e, '#lookbook')}
                className="text-black hover:opacity-60 transition-opacity duration-300"
                style={{ fontFamily: 'Karla, sans-serif', fontSize: '24px', lineHeight: '28px', fontWeight: 500 }}
              >
                LOOKBOOK
              </a>
              <a
                href="#philosophy"
                onClick={(e) => handleSmoothScroll(e, '#philosophy')}
                className="text-black hover:opacity-60 transition-opacity duration-300"
                style={{ fontFamily: 'Karla, sans-serif', fontSize: '24px', lineHeight: '28px', fontWeight: 500 }}
              >
                PHILOSOPHY
              </a>
              <a
                href="https://www.ozon.ru"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Karla, sans-serif', fontSize: '24px', lineHeight: '28px', fontWeight: 500 }}
              >
                View on Ozon
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}