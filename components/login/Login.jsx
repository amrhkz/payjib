import React from "react";
import "@/components/login/login.css";
import Link from "next/link";
import Input from "../input/Input";

function Login() {
  return (
    <div className="login">
      <div className="content">
        <button className="google-login">ورود با حساب گوگل</button>
        <hr />
        <h1>ورود به حساب پی‌جیب</h1>
        <form action="">
          <Input placeHolder={"ایمیل"}/>
          <Input placeHolder={"رمز عبور"}/>
          <div className="row">
            <div className="remember">
              <span className="checkbox"></span>
              <p>مرا بخاطر بسپار</p>
            </div>
            <div className="forget">
              <Link href={"/auth/reset"}>بازیابی رمز عبور</Link>
            </div>
          </div>
          <button className="login-btn">
            <Link href={"/profile"}>ورود به حساب کاربری</Link>
          </button>
        </form>
        <Link href="/auth/register">
          <span>حساب کاربری ندارید؟</span>ثبت نام کنید.
        </Link>
      </div>
    </div>
  );
}

export default Login;
