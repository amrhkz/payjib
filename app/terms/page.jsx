import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Terms from "@/components/terms/Terms";
import React from "react";
import "@/app/terms/terms.css";

function page() {
  return (
    <>
      <Navbar />
      <Terms />
      <Footer />
    </>
  );
}

export default page;
