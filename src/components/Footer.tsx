export function Footer() {
  return (
    <footer className="py-16 px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="mb-6 tracking-[0.3em]">AIRON</h4>
            <p
              className="text-gray-400 tracking-wide leading-relaxed"
              style={{ fontSize: "0.875rem", fontWeight: 300 }}
            >
              Premium basics for the modern wardrobe
            </p>
          </div>
          <div>
            <h4
              className="mb-6 tracking-widest"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              SHOP
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.ozon.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}
                >
                  Ozon Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#lookbook"
                  className="text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}
                >
                  Lookbook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="mb-6 tracking-widest"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              ABOUT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#philosophy"
                  className="text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}
                >
                  Quality & Craftsmanship
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="mb-6 tracking-widest"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              CONNECT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p
            className="text-gray-500 tracking-wide"
            style={{ fontSize: "0.75rem", fontWeight: 300 }}
          >
            © 2025 AIRON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
