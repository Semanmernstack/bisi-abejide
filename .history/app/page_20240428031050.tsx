import Anka from "@/components/Anka";
import Icon from "@/components/Icon";
import Product from "@/components/Product";
import Slide from "@/components/Slide";
import Tuban from "@/components/Tuban";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-green-50  gap-2">
      <div>
        <Icon/>
      </div>
      <div className="h-40">
        <Slide/>
      </div>
      <div>
        <Product/>
      </div>
      <div>
        <Anka/>
      </div>
      
        <div>
          <Tuban/>
        </div>
        
      
      
      
    </main>
  );
}
