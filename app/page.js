import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { getFeaturedProducts } from "@/sanity/lib/queries";

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={products} />
    </>
  );
}
