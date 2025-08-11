"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/components/navbar/navbar.css";
import Link from "next/link";
import MobileMenu from "../mobile-menu/MobileMenu";
import Image from "next/image";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenu(false);
    }
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", controlNavbar);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="nav-container">
        <div className="right">
          <Link href={"/"}>
            <Image src="/img/logo.svg" alt="logo" />
          </Link>
          <ul className="nav-menu">
            <Link href={"/"}>خانه</Link>
            <Link href={"#questions"}>سوالات متداول</Link>
            <Link href={"#about"}>درباره ما</Link>
            <Link href={"/terms"}>قوانین</Link>
            <Link href={"/"}>وبلاگ</Link>
          </ul>
          <MobileMenu />
        </div>
        <div className="left logged">
          <Link href={"/auth/login"}>
            <button>ورود یا ثبت نام</button>
          </Link>
          <div className="profile-btn" onClick={handleMenuToggle} ref={menuRef}>
            <div className={`btn ${mobileMenu ? "rotate" : ""}`}>
              <i className="bx bx-chevron-down bx-sm"></i>
              <p>امیرحسین کریم زاده</p>
              <Image src="/img/smile.svg" alt="smile" />
            </div>
            <div className={`drop-menu ${mobileMenu ? "open" : ""}`}>
              <Link href={"/profile"}>پروفایل</Link>
              <Link href={"/"}>خروج</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
