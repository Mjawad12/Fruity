import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import MainCanvas from "@/components/CanvasComponents/MainCanvas";

export default function Home() {
  return (
    <section className="min-h-screen w-full">
      <Navbar />
      <Hero />
    </section>
  );
}
