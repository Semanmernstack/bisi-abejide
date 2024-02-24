import Anka from "@/components/Anka";
import Product from "@/components/Product";
import Slide from "@/components/Slide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-green-50   flex-col min-h-screen gap-2">
      <h1>hi</h1>
      <Slide/>
      <Product/>
      
        <Anka/>
      
      
      
    </main>
  );
}
