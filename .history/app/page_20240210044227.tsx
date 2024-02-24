import Product from "@/components/Product";
import Slide from "@/components/Slide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col gap-2">
      <h1>hi</h1>
      <Slide/>
      <Product/>
      
    </main>
  );
}
