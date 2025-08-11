import Image from "next/image";
import "./home.css";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import Familiarity from "@/components/familiarity/Familiarity";
import Fee from "@/components/fee/Fee";
import UserCarousel from "@/components/userCarousel/UserCarousel";
import Questions from "@/components/questions/Questions";
import About from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Familiarity />
      <Fee />
      <UserCarousel />
      <Questions />
      <About />
      <Footer />
    </>
  );
}
