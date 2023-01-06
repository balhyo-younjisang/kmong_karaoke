import { Inter } from "@next/font/google";
import Header from "./header";
import Section from "./section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Section />
    </>
  );
}
