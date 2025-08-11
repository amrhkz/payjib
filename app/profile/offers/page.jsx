"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import "@/app/profile/offers/offers.css";
import Pagination from "@/components/pagination/Pagination";
import Input from "@/components/input/Input";

function Page() {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
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
  const toggleSearchMenu = () => {
    setIsSearchMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <div className="offers">
        <div className="container">
          <Sidebar />
          <div className="content">
            <div className="tab">
              <div className="right">
                <div className="info item tab-btn active">
                  <p>پیشنهادهای ارسالی من</p>
                </div>
                <div className="refer item tab-btn">
                  <p>پیشنهادهای دریافتی من</p>
                </div>
              </div>
              <div className="left">
                <button className="search-btn" onClick={toggleSearchMenu}>
                  <i className="bx bx-chevron-down"></i>
                  <p>جستجو و فیلتر</p>
                  <i className="bx bx-search-alt-2"></i>
                </button>
              </div>
            </div>
            <div className={`search-menu ${isSearchMenuOpen ? "open" : ""}`}>
              <div className="row">
                <Input placeHolder={"ایمیل خود را وارد کنید"} />
                <Input placeHolder={"ایمیل خود را وارد کنید"} />
              </div>
              <div className="row">
                <Input placeHolder={"ایمیل خود را وارد کنید"} />
                <Input placeHolder={"ایمیل خود را وارد کنید"} />
              </div>
              <div className="row">
                <Input placeHolder={"ایمیل خود را وارد کنید"} />
                <Input placeHolder={"ایمیل خود را وارد کنید"} />
              </div>
              <div className="row">
                <Input placeHolder={"ایمیل خود را وارد کنید"} />
              </div>
              <div className="row">
                <button>اعمال فیلترها و مشاهده تغییرات</button>
                <button>حذف فیلترها</button>
              </div>
            </div>
            <div className="info-menu menu tab-content active">
              <Pagination />
            </div>
            <div className="info-menu menu tab-content">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
