"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useEffect } from "react";
import "@/app/profile/dashboard/dashboard.css";
import Input from "@/components/input/Input";

function Page() {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-btn");
    const all_content = document.querySelectorAll(".tab-content");
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");
        all_content.forEach((content) => {
          content.classList.remove("active");
        });
        all_content[index].classList.add("active");
      });
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="container">
          <Sidebar />
          <div className="content">
            <div className="tab">
              <div className="info item tab-btn active">
                <p>درخواست ها و تراکنش ها</p>
              </div>
              <div className="refer item tab-btn">
                <p>تخفیف های من</p>
              </div>
            </div>
            <div className="info-menu menu tab-content active">
              <div className="title">
                <img src="/img/requests.svg" alt="" />
                <h3>تعداد درخواست‌ها</h3>
              </div>
              <div className="row">
                <span>0</span>
                <p>تعداد درخواست های فعال من</p>
                <i class="bx bx-chevron-left bx-sm"></i>
              </div>
              <div className="title">
                <img src="/img/offers.svg" alt="" />
                <h3>تعداد پیشنهادها</h3>
              </div>
              <div className="row">
                <span>0</span>
                <p>تعداد درخواست های فعال من</p>
                <i class="bx bx-chevron-left bx-sm"></i>
              </div>
              <div className="row">
                <span>0</span>
                <p>تعداد درخواست های فعال من</p>
                <i class="bx bx-chevron-left bx-sm"></i>
              </div>
              <div className="title">
                <img src="/img/transactions.svg" alt="" />
                <h3>تعداد تراکنش‌ها</h3>
              </div>
              <div className="row">
                <span>0</span>
                <p>تعداد درخواست های فعال من</p>
                <i class="bx bx-chevron-left bx-sm"></i>
              </div>
            </div>
            <div className="refer-menu menu tab-content">
              <div className="row">
                <p>
                  با ارسال این لینک به دوستان خود، پس از ثبت نام و انجام اولین
                  تراکنش موفق توسط آنها، تا سقف ۱۰۰۰ یورو برای تراکنش بعدی خود
                  تخفیف ۱۰۰ درصدی کارمزد پی جیب بگیرید.
                </p>
                <div className="copy">
                  <p>
                    https://payjib.com/auth/register?invitedBy=karimzade.ah@gmail.com
                  </p>
                  <hr />
                  <button>کپی کردن لینک</button>
                </div>
                <p>
                  یا ایمیل مخاطب خود را وارد کرده تا لینک دعوت شما برای او ارسال
                  شود
                </p>
                <div className="email">
                  <Input placeHolder={"ایمیل مخاطب خود را وارد کنید"} />
                  <button>ارسال لینک به ایمیل</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
