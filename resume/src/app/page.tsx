import Hero from "./components/Hero";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg p-3 ${inter.className}`}>
      <Hero />
    </main>
  );
}
