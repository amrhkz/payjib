"use client";
import React, { useEffect, useState } from "react";
import "@/app/profile/bank-accounts/bank-accounts.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Pagination from "@/components/pagination/Pagination";

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
      <div className="bank-accounts">
        <div className="container">
          <Sidebar />
          <div className="content">
            <div className="tab">
              <div className="info item tab-btn active">
                <p>حساب های مبداء ریالی</p>
              </div>
              <div className="refer item tab-btn">
                <p>حساب های مقصد ریالی</p>
              </div>
              <div className="refer item tab-btn">
                <p>حساب های مقصد ارزی</p>
              </div>
            </div>
            <div className={`search-menu ${isSearchMenuOpen ? "open" : ""}`}>
              <input type="text" placeholder="placeholder" />
              <input type="text" placeholder="placeholder" />
              <input type="text" placeholder="placeholder" />
              <input type="text" placeholder="placeholder" />
              <input type="text" placeholder="placeholder" />
              <input type="text" placeholder="placeholder" />
              <input type="text" placeholder="placeholder" />
              <div className="row">
                <button>اعمال فیلترها و مشاهده تغییرات</button>
                <button>حذف فیلترها</button>
              </div>
            </div>
            <div className="info-menu menu tab-content active">
              <p>حسابی تعریف نکرده اید.</p>
            </div>
            <div className="refer-menu menu tab-content">
              <p>حسابی تعریف نکرده اید.</p>
            </div>
            <div className="refer-menu menu tab-content">
              <p>حسابی تعریف نکرده اید.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
