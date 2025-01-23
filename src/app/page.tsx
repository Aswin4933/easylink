import Widget from "@/components/Widget";
import CategorySlider from '@/components/CategorySlider'
import Image from "next/image";
import ContactNowWidget from "@/components/ContactNowWidget";
import ProductWidget from '@/components/ProductSection'
import HeroSection from "@/components/HeroSection";
import products from '@/lib/products'

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <CategorySlider></CategorySlider>
      <Widget></Widget>
      <ProductWidget products={products} />
      <ContactNowWidget></ContactNowWidget>
    </div>
  );
}
