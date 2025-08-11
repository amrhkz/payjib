import React from "react";
import "@/components/footer/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="main">
            <img src="/img/logo.svg" alt="" />
            <p>
              در پی‌جیب می‌تونید مبلغ مورد نظرتون رو به سرعت و با کم‌ترین
              کارمزد، از ایران به اروپا، استراليا، كانادا و تركيه یا بالعکس، با
              کمک سایر کاربران پی‌جیب، انتقال بدید.
            </p>
          </div>
          <div className="menu">
            <div className="row">
              <p>تماس با پی‌جیب</p>
            </div>
            <div className="row">
              <p>ایمیل:</p>
              <p>info@payjib.com</p>
            </div>
            <div className="row">
              <p>شماره تماس:</p>
              <span>
                <p>+989101369884</p>
                <p>+989356049661</p>
              </span>
            </div>
            <div className="row">
              <p>شماره واتساپ</p>
              <span>
                <p>+989101369884</p>
                <p>+989356049661</p>
              </span>
            </div>
          </div>
          <div className="social">
            <p>پی‌جیب در شبکه‌های اجتماعی</p>
            <div className="icons">
              <i class="bx bxl-twitter bx-sm"></i>
              <i class="bx bxl-telegram bx-sm"></i>
              <i class="bx bxl-instagram bx-sm"></i>
            </div>
          </div>
        </div>
        <div className="copyright">
          <i class="bx bx-copyright"></i>
          <p>کلیه حقوق برای پی‌جیب محفوظ است.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
