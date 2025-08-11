import React from "react";
import "@/components/banner/banner.css";
import Link from "next/link";
import Container from "../container/Container";

function Banner() {
  return (
    <div className="banner">
      <Container>
        <div className="banner-content">
          <h1>پی‌جیب</h1>
          <h2>پلتفرم تبادل ارز بین ایران، اروپا، استراليا، كانادا و تركيه</h2>
          <Link href={"/profile/submit-request"}>ثبت درخواست تبادل</Link>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
