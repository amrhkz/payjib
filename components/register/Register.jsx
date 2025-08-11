import React from "react";
import "@/components/register/register.css";
import Link from "next/link";
import Input from "../input/Input";

function Register() {
  return (
    <div className="register">
      <div className="content">
        <h1>ثبت‌نام در پی‌جیب</h1>
        <p>
          <span>مرحله اول: </span>ثبت اطلاعات اولیه
        </p>
        <form action="">
          <Input placeHolder={"نام و نام خانوادگی"} />
          <Input placeHolder={"ایمیل"} />
          <Input placeHolder={"رمز عبور"} />
          <div className="capcha"></div>
          <button className="register-btn">تایید و ادامه</button>
        </form>
        <Link href="/auth/login">
          <span>حساب کاربری دارید؟</span>وارد شوید.
        </Link>
      </div>
    </div>
  );
}

export default Register;
