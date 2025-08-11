"use client";
import React, { useEffect, useRef } from "react";
import "@/components/userCarousel/usercarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Container from "../container/Container";

function UserCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const adjustSlideHeight = () => {
      if (!swiperRef.current) return;
      const slides = swiperRef.current.querySelectorAll(".swiper-slide .card");
      let maxHeight = 0;
      slides.forEach((slide) => {
        const slideHeight = slide.clientHeight;
        if (slideHeight > maxHeight) {
          maxHeight = slideHeight;
        }
      });
      slides.forEach((slide) => {
        slide.style.height = `${maxHeight}px`;
      });
    };
    adjustSlideHeight();
    window.addEventListener("resize", adjustSlideHeight);
    return () => {
      window.removeEventListener("resize", adjustSlideHeight);
    };
  }, []);

  return (
    <div className="user-carousel" ref={swiperRef}>
      <Container>
        <h1>پی‌جیب از نگاه کاربران</h1>
        <Swiper className="mySwiper" slidesPerView={3} spaceBetween={25}>
          <SwiperSlide>
            <div className="card">
              <div className="description">
                خیلی ممنونم از پلتفرم پی جیب جدا از خدمات خوب و مطمئنشون،
                پشتیبانی آن تایم ، پیگیر و قابل اعتمادی دارند و واقعا جابه‌جایی
                ارز رو برای مایی که خارج از ایران هستیم آسونتر کردند.
              </div>
              <div className="author">
                <img src="./img/woman.svg" alt="" />
                <p>بهاره از سوئد</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="description">
                من از طریق معرفی دو تا از دوستان با پی جیب آشنا شدم و اصلا
                نمیدونستم همچین پلتفرمی تو ایران وجود داره. اول از همه وقتی نرخ
                کارمزد رو دیدم شوکه شدم! چون خیلی کمتراز بقیه بود و بعد که تو
                سایت گشتم خیلی ازین ایده خوشم اومد که دوستانی هستند خارج از کشور
                که نیاز به پول ریالی دارند و ما اینجا نیاز به پرداخت ارزی و
                اینجوری هردومون میتونیم به هم کمک کنیم و بدون واسطه کار همدیگرو
                راه بندازیم 😇 بابت پشتیبانی هم خیلی ممنونم ازتون ازهمون لحظه ای
                که درخواستم رو ثبت کردم تا الان که تموم شده سفارشم، دائم و هر
                ساعتی در دسترس بودید و پاسخگوی تمام سوالاتم بودید🌺
              </div>
              <div className="author">
                <img src="./img/woman.svg" alt="" />
                <p>نازنین از آلمان</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="description">
                من قبل‌تر از طریق صرافی می‌خواستم پول ارسال کنم و کمیسیونی که
                برای مبالغ پایین و دانشجویی میگرفتن هم خیلی گنگ بود و هم خیلی
                بالا که قرار بود ارسال کنم اصلا به صرفه نبود و زمان انجام تراکنش
                هم بین 2 تا یک هفته ممکن بود طول بکشه و باتوجه به اینکه صرافی
                همیشه پاسخگو نیست و پشتیبانی آنلاینی که در دنیای امروز واقعا یک
                نیاز هست وجود نداره برای یک صرافی میشه فهمید که صرافی برای دنیای
                امروز سیستم خیلی قدیمی، کند و گرونی محسوب میشه. سایت پی‌جیب با
                توجه به کمیسیون مشخص و سیستم قیمت‌گذاری که خود افراد انجام میدن،
                و همچنین سرعت و ایمنی انجام تراکنش‌ها در کنار پشتیبانی و
                راهنمایی خوبشون میشه گفت مشکلات اون سیستم قدیمی و کند رو برطرف
                کرده و تبادل بین‌المللی ارز خیلی خیلی راحت‌تر شده.
              </div>
              <div className="author">
                <img src="./img/woman.svg" alt="" />
                <p>حمیدرضا از ایران</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="description">
                خیلی ممنونم از پلتفرم پی جیب جدا از خدمات خوب و مطمئنشون،
                پشتیبانی آن تایم ، پیگیر و قابل اعتمادی دارند و واقعا جابه‌جایی
                ارز رو برای مایی که خارج از ایران هستیم آسونتر کردند.
              </div>
              <div className="author">
                <img src="./img/woman.svg" alt="" />
                <p>بهاره از سوئد</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="description">
                خیلی ممنونم از پلتفرم پی جیب جدا از خدمات خوب و مطمئنشون،
                پشتیبانی آن تایم ، پیگیر و قابل اعتمادی دارند و واقعا جابه‌جایی
                ارز رو برای مایی که خارج از ایران هستیم آسونتر کردند.
              </div>
              <div className="author">
                <img src="./img/woman.svg" alt="" />
                <p>بهاره از سوئد</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="description">
                خیلی ممنونم از پلتفرم پی جیب جدا از خدمات خوب و مطمئنشون،
                پشتیبانی آن تایم ، پیگیر و قابل اعتمادی دارند و واقعا جابه‌جایی
                ارز رو برای مایی که خارج از ایران هستیم آسونتر کردند.
              </div>
              <div className="author">
                <img src="./img/woman.svg" alt="" />
                <p>بهاره از سوئد</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default UserCarousel;
