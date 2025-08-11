import React from "react";
import "@/components/features/features.css";
import Container from "../container/Container";
import Image from "next/image";

function Features() {
  return (
    <div className="features">
      <Container>
        <div className="top">
          <h1>ویژگی‌های پی‌جیب</h1>
        </div>
        <div className="bottom">
          <div className="features-item">
            <Image src="./img/security.png" alt="security" />
            <p className="title">امن</p>
            <p className="description">احراز هویت سه‌مرحله‌ای کاربران</p>
          </div>
          <div className="features-item">
            <Image src="./img/money-saving.png" alt="money-saving" />
            <p className="title">کم هزینه</p>
            <p className="description">نرخ ارز توافقی و حداقل کارمزد تبدیل</p>
          </div>
          <div className="features-item">
            <Image src="./img/high-speed.png" alt="high-speed" />
            <p className="title">سریع</p>
            <p className="description">استفاده از روش‌های نوین نظیریابی</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Features;
