import Product from "@/components/Product";
import Slide from "@/components/Slide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-green-500  flex-col min-h-screen gap-2">
      <h1>hi</h1>
      <Slide/>
      <Product/>
      
    </main>
  );
}
