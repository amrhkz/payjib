"use client";
import React, { useState } from "react";
import "@/components/mobile-menu/MobileMenu.css";
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";

function MobileMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className="mobile-menu">
      <div className="mobile-btn" onClick={handleMenu}>
        <i className="bx bx-menu bx-md"></i>
      </div>
      <div className={`mobile-content ${mobileMenu ? "active" : ""}`}>
        <div className="close-btn" onClick={handleMenu}>
          <i class="bx bx-x bx-md"></i>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default MobileMenu;
