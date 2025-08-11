"use client";
import React, { useEffect, useState } from "react";
import "@/app/profile/transactions/transactions.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Pagination from "@/components/pagination/Pagination";
import Input from "@/components/input/Input";

function page() {
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
      <div className="transactions">
        <div className="container">
          <Sidebar />
          <div className="content">
            <div className="tab">
              <div className="right">
                <div className="info item tab-btn active">
                  <p>همه</p>
                </div>
                <div className="refer item tab-btn">
                  <p>درحال انجام</p>
                </div>
                <div className="refer item tab-btn">
                  <p>موفق</p>
                </div>
                <div className="refer item tab-btn">
                  <p>پذیرفته نشده</p>
                </div>
                <div className="refer item tab-btn">
                  <p>لغو شده</p>
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
                <Input placeHolder={"حداقل حجم درخواست"} />
                <Input placeHolder={"حداکثر حجم درخواست"} />
              </div>
              <div className="row">
                <Input placeHolder={"حداقل نرخ تبدیل"} />
                <Input placeHolder={"حداکثر نرخ تبدیل"} />
              </div>
              <div className="row">
                <Input placeHolder={"انتخاب ارز"} />
                <Input placeHolder={"وضعیت درخواست"} />
              </div>
              <div className="row">
                <Input placeHolder={"انتخاب همه"} />
              </div>
              <div className="row">
                <button>اعمال فیلترها و مشاهده تغییرات</button>
                <button className="delete-btn">
                  <img src="/img/delete.svg" alt="" />
                  <p>حذف فیلترها</p>
                </button>
              </div>
            </div>
            <div className="info-menu menu tab-content active">
              <Pagination />
            </div>
            <div className="info-menu menu tab-content">
              <Pagination />
            </div>
            <div className="info-menu menu tab-content">
              <Pagination />
            </div>
            <div className="info-menu menu tab-content">
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

export default page;
