import React from "react";
import "@/components/reset/reset.css";
import Link from "next/link";
import Input from "../input/Input";

function Reset() {
  return (
    <div className="reset">
      <Link href={"/auth/login"}>بازگشت</Link>
      <div className="content">
        <h1>بازیابی رمز عبور</h1>
        <p>برای دریافت لینک بازیابی رمز عبور، ایمیل خود را وارد کنید.</p>
        <form action="">
          <Input placeHolder={"ایمیل خود را وارد کنید"} />
          <button className="reset-btn">تایید و ادامه</button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
