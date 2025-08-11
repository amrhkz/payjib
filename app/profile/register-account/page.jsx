"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useEffect, useState, useRef } from "react";
import "@/app/profile/register-account/register-account.css";
import Link from "next/link";
import Input from "@/components/input/Input";
import Image from "next/image";

function Page() {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [idCardPreview, setIdCardPreview] = useState(null);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-btn");
    const all_content = document.querySelectorAll(".tab-content");
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
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

  const handleCheckboxChange = () => {
    setIsTermsChecked((prev) => !prev);
  };

  const handleFileUpload1 = () => {
    fileInputRef1.current.click();
  };

  const handleFileUpload2 = () => {
    fileInputRef2.current.click();
  };

  const handleIdCardChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIdCardPreview(URL.createObjectURL(file));
    }
  };

  const handleSelfieChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelfiePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-account">
        <div className="container">
          <Sidebar />
          <div className="content">
            <p>
              جهت احراز هویت و فعال سازی کامل حساب کاربری مدارک و اطلاعات زیر
              الزامی میباشد:
            </p>
            <ul>
              <li>عکس کارت ملی و یا گذرنامه ایرانی</li>
              <li>
                عکس “سلفی” از چهره ی خود در حالی که مدرک مورد نظر را طبق راهنما
                در دست دارید.
              </li>
              <li>کد ملی</li>
              <li>تأیید قوانین و مقررات سایت</li>
            </ul>
            <form action="">
              <div className="upload-field">
                <div className="upload-content">
                  <div className="top">
                    <button type="button" onClick={handleFileUpload1}>
                      بارگذاری عکس مدرک
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef1}
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleIdCardChange}
                    />
                    <p>JPG , PNG</p>
                  </div>
                  <div className="bottom">
                    {idCardPreview && (
                      <Image src={idCardPreview} alt="ID Card Preview" />
                    )}
                  </div>
                </div>
                <span
                  data-tooltip="جهت جلوگیری از ثبت‌نام حساب‌های کاربری 
جعلی نیاز به دریافت مدرک شناسایی معتبر 
می‌باشد. پی‌جیب این مدارک را فقط و فقط جهت 
احراز هویت و تضمین امنیت انجام تراکنش 
توسط کاربران دریافت می‌نماید و هیچ کاربرد 
دیگری ندارد."
                  className="tooltip doc-tooltip"
                >
                  چرا ثبت مدرک؟
                </span>
              </div>
              <div className="upload-field">
                <div className="upload-content">
                  <div className="top">
                    <button type="button" onClick={handleFileUpload2}>
                      بارگذاری عکس سلفی
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef2}
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleSelfieChange}
                    />
                    <p>JPG , PNG</p>
                  </div>
                  <div className="bottom">
                    {selfiePreview && (
                      <Image src={selfiePreview} alt="Selfie Preview" />
                    )}
                  </div>
                </div>
                <span
                  data-v-518db910=""
                  data-selfie-tooltip=""
                  className="tooltip selfie-photo-tooltip"
                >
                  راهنمای عکس
                </span>
              </div>
              <Input placeHolder="کد ملی خود را وارد کنید" />
              <div
                className="checkbox"
                onClick={handleCheckboxChange}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  checked={isTermsChecked}
                  onChange={handleCheckboxChange}
                  onClick={(e) => e.stopPropagation()}
                />
                <p>
                  <Link href={"/terms"}>قوانین و مقررات</Link> سایت را خوانده ام
                  و تایید میکنم.
                </p>
              </div>
              <button type="submit" disabled={!isTermsChecked}>
                تایید و ثبت نهایی
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
