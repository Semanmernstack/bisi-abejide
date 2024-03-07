import Anka from "@/components/Anka";
import Icon from "@/components/Icon";
import Product from "@/components/Product";
import Slide from "@/components/Slide";
import Tuban from "@/components/tuban";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-green-50   flex-col min-h-screen gap-2">
      <Icon/>
      <Slide/>
      <Product/>
      
        <Anka/>
        <Tuban/>
      
      
      
    </main>
  );
}
