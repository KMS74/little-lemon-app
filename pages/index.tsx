import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import SpecialsMenu from "@/components/SpecialsMenu";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Lemon | Home</title>
        <meta name="description" content=" Little Lemon restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <HeroSection />
        <SpecialsMenu />
        <Testimonials />
        <AboutSection />
      </>
    </>
  );
}
