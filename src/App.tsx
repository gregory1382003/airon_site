import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { LookbookGrid } from "./components/LookbookGrid";
import { FabricSection } from "./components/FabricSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
// Use remote image URL instead of local figma asset
const heroImage = "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/end.webp";

const products = [
  {
    id: "1",
    title: "PREMIUM LONG-SLEEVE",
    description: "Crafted from 100% organic cotton with a relaxed fit. Designed for all-day comfort and timeless style. Features reinforced stitching and a modern minimal aesthetic.",
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl: "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/long_black.webp",
      },
      {
        name: "White",
        hex: "#FFFFFF",
        imageUrl: "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/long_white.webp",
      },
    ],
    ozonLink: "https://www.ozon.ru/product/longsliv-airon-oversayz-3120099035/",
  },
  {
    id: "2",
    title: "ESSENTIAL T-SHIRT",
    description: "Premium weight cotton tee with a classic fit. Breathable, durable, and designed to be your everyday essential. Features a modern crew neck and clean hem.",
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl: "https://ir.ozone.ru/s3/multimedia-1-5/wc1000/8588185745.jpg",
      },
      {
        name: "White",
        hex: "#FFFFFF",
        imageUrl: "https://ir.ozone.ru/s3/multimedia-1-w/wc1000/8588185160.jpg",
      },
    ],
    ozonLink: "https://www.ozon.ru/product/futbolka-airon-oversayz-1881485597/?_bctx=CAQQ-6Rg&hs=1",
  },
  {
    id: "3",
    title: "MODERN SHORTS",
    description: "Versatile shorts built for comfort and style. Premium cotton blend with an athletic-inspired fit. Perfect for both active days and casual weekends.",
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl: "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/shorts_black.webp",
      },
      {
        name: "Dark-Grey",
        hex: "#575656ff",
        imageUrl: "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/shorts_darkgrey.webp",
      },
      {
        name: "Light-Grey",
        hex: "#b4afafff",
        imageUrl: "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/shorts_ligghtgrey.webp",
      },
      {
        name: "White",
        hex: "#FFFFFF",
        imageUrl: "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/shorts_white.webp",
      },
      {
        name: "Beige",
        hex: "#D4C5B9",
        imageUrl: "https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/shorts_beige.webp",
      },
    ],
    ozonLink: "https://www.ozon.ru/product/shorty-airon-oversayz-2786593701/?at=83tBp8B3lhM3v7g9UpK3ABAFOQAmQNHylPrmGugpEvgX&from_sku=2002186356&oos_search=false",
  },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero imageUrl={heroImage} />
      <LookbookGrid products={products} title="COLLECTION" />
      <FabricSection imageUrl="https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/tkan.webp" />
      <PhilosophySection />
      <CTASection imageUrl="https://raw.githubusercontent.com/gregory1382003/airon_site/refs/heads/main/pictures/end.webp" />
      <Footer />
    </div>
  );
}