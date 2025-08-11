"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useEffect } from "react";
import "@/app/profile/profile.css";
import Input from "@/components/input/Input";
import Image from "next/image";

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
      <div className="profile">
        <div className="container">
          <Sidebar />
          <div className="content">
            <div className="tab">
              <div className="info item tab-btn active">
                <p>مشخصات کاربر</p>
              </div>
              <div className="refer item tab-btn">
                <p>معرفی به دوستان</p>
              </div>
            </div>
            <div className="info-menu menu tab-content active">
              <div className="row">
                <div className="item">
                  <div className="row-2">
                    <div className="col title">تاریخ ثبت‌نام اولیه</div>
                    <div className="col">۱۴۰۳/۶/۱۲</div>
                  </div>
                  <div className="row-2">
                    <div className="col title">وضعیت اعتبارسنجی کاربر:</div>
                    <div className="col verify">مورد تأیید است</div>
                  </div>
                </div>
                <div className="item">
                  <div className="row-2">
                    <div className="col title">نام و نام خانوادگی</div>
                    <div className="col">امیرحسین کریم زاده</div>
                  </div>
                  <div className="row-2">
                    <div className="col title">کشور</div>
                    <div className="col">ایران</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <div className="row-2">
                    <div className="col title">شماره موبایل:</div>
                    <div className="col">9123456789 98+</div>
                  </div>
                  <div className="row-2">
                    <div className="col title">ایمیل:</div>
                    <div className="col">yourEmail@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <div className="row-2">
                    <div className="col title">کد ملی</div>
                    <div className="col">2759155348</div>
                  </div>
                  <div className="row-2">
                    <div className="col title">وضعیت کد ملی:</div>
                    <div className="col verify">تأیید شده</div>
                  </div>
                </div>
                <div className="item">
                  <div className="row-2">
                    <div className="col title">مدرک هویتی:</div>
                    <div className="col">
                      <Image alt="id"/>
                    </div>
                  </div>
                  <div className="row-2">
                    <div className="col title">وضعیت مدرک هویتی:</div>
                    <div className="col verify">تأیید شده</div>
                  </div>
                </div>
                <div className="item">
                  <div className="row-2">
                    <div className="col title">
                      تصویر سلفی همراه با مدرک شناسایی در کنار صورت:
                    </div>
                    <div className="col">
                      <Image alt="selfie"/>
                    </div>
                  </div>
                  <div className="row-2">
                    <div className="col title">وضعیت تصویر سلفی:</div>
                    <div className="col verify">تأیید شده</div>
                  </div>
                </div>
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
                  <button>
                    <p>کپی کردن لینک</p>
             
                    <Image src={"/img/copy.svg"} alt="copy"/>
                  </button>
                </div>
                <p>
                  یا ایمیل مخاطب خود را وارد کرده تا لینک دعوت شما برای او ارسال
                  شود
                </p>
                <div className="email">
                  <Input placeHolder={"ایمیل مخاطب خود را وارد کنید"} />
                  <button>
                    <p>ارسال لینک به ایمیل</p>
                    <Image src={"/img/send-email.svg"} alt="send-email"/>
                  </button>
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
