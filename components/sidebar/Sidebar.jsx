"use client";
import React, { useState } from "react";
import "@/components/sidebar/sidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Sidebar() {
  const pathName = usePathname();
  const [isVerified, setIsVerified] = useState(true);

  return (
    <>
      <div className="sidebar">
        <div className="content">
          <Link
            href={"/profile"}
            className={pathName === "/profile" ? "active" : ""}
          >
            <Image src="/img/smile.svg" alt="" />
            <p>امیرحسین کریم زاده</p>
            <Image src="/img/alert.svg" alt="" />
          </Link>
          <hr />
          <Link
            href={"/profile/dashboard"}
            className={pathName === "/profile/dashboard" ? "active" : ""}
          >
            <Image src="/img/dashboard.svg" alt="" />
            <p>داشبورد</p>
          </Link>
          <Link
            href={"/profile/requests"}
            className={pathName === "/profile/requests" ? "active" : ""}
          >
            <Image src="/img/requests.svg" alt="" />
            <p>درخواست ها</p>
          </Link>
          <Link
            href={"/profile/offers"}
            className={pathName === "/profile/offers" ? "active" : ""}
          >
            <Image src="/img/offers.svg" alt="" />
            <p>پیشنهاد ها</p>
          </Link>
          <Link
            href={"/profile/transactions"}
            className={pathName === "/profile/transactions" ? "active" : ""}
          >
            <Image src="/img/transactions.svg" alt="" />
            <p>تراکنش ها</p>
          </Link>
          <Link
            href={"/profile/bank-accounts"}
            className={pathName === "/profile/bank-accounts" ? "active" : ""}
          >
            <Image src="/img/card.svg" alt="" />
            <p>حساب های بانکی</p>
          </Link>
        </div>
        <div className="bottom">
          {isVerified ? (
            <div className="text">
              <p>برای ثبت درخواست خرید یا فروش از طریق منو وارد داشبورد شوید</p>
            </div>
          ) : (
            <Link href={"/profile/register-account"}>
              <button>تکمیل حساب کاربری</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
