"use client";
import React, { useState } from "react";
import "@/app/profile/submit-request/submit-request.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/container/Container";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";
import Content from "@/components/container/content/Content";
import Tab from "@/components/Tab/Tab";
import TabNav from "@/components/Tab/TabNav/TabNav";
import TabTitle from "@/components/Tab/TabNav/TabTitle/TabTitle";
import TabMenu from "@/components/Tab/TabMenu/TabMenu";
import TabContent from "@/components/Tab/TabMenu/TabContent/TabContent";
import Input from "@/components/input/Input";
import Dropdown from "@/components/dropdown/Dropdown";
import Image from "next/image";

function Page() {
  const [menuOpen, setMenuOpen] = useState(true);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <Content>
          <Tab>
            <TabNav>
              <TabTitle>خرید ارز</TabTitle>
              <TabTitle>فروش ارز</TabTitle>
              <TabTitle>کمک به خیریه های داخل ایران</TabTitle>
            </TabNav>
            <TabMenu>
              <TabContent>
                <div className={`tab-card ${menuOpen ? "open" : ""}`}>
                  <div className="top" onClick={handleToggle}>
                    <div className="card-row row-bg">
                      <p>پرداخت تومان در ایران و دریافت ارز در خارج از کشور</p>
                      <i class="bx bx-chevron-up bx-sm"></i>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="card-row">
                      <Input placeHolder={"مقدار را وارد کنید"} />
                      <Input
                        placeHolder={"نرخ تبدیل هر واحد را وارد کنید ( تومان )"}
                      />
                    </div>
                    <div className="card-row">
                      <Input
                        placeHolder={"کشور مقصد حساب ارزی خود را انتخاب کنید"}
                      />
                      <Input placeHolder={"ارز را انتخاب کنید"} />
                    </div>
                    <div className="card-row">
                      <button className="primary-btn">ثبت اولیه و ادامه</button>
                      <button className="secondary-btn">
                        <Image src="/img/submit.svg" alt="submit" />
                        <p>مشاهده نحوه ی محاسبه ی کارمزد</p>
                      </button>
                    </div>
                  </div>
                </div>
              </TabContent>
              <TabContent>
                <div className={`tab-card ${menuOpen ? "open" : ""}`}>
                  <div className="top" onClick={handleToggle}>
                    <div className="card-row row-bg">
                      <p>
                        فروش ارز در خارج از کشور و دریافت معادل تومانی در ایران
                      </p>
                      <i class="bx bx-chevron-up bx-sm"></i>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="card-row">
                      <Input placeHolder={"مقدار را وارد کنید"} />
                      <Input
                        placeHolder={"نرخ تبدیل هر واحد را وارد کنید ( تومان )"}
                      />
                    </div>
                    <div className="card-row">
                      <Input
                        placeHolder={"کشور مبداء حساب ارزی خود را انتخاب کنید"}
                      />
                      <Input placeHolder={"ارز را انتخاب کنید"} />
                    </div>
                    <div className="card-row">
                      <button className="primary-btn">ثبت اولیه و ادامه</button>
                      <button className="secondary-btn">
                        <Image src="/img/submit.svg" alt="submit" />
                        <p>مشاهده نحوه ی محاسبه ی کارمزد</p>
                      </button>
                    </div>
                  </div>
                </div>
              </TabContent>
              <TabContent>
                <div className={`tab-card ${menuOpen ? "open" : ""}`}>
                  <div className="top" onClick={handleToggle}>
                    <div className="card-row row-bg">
                      <p>
                        فروش ارز در خارج از کشور و واریز معادل تومانی آن به
                        خیریه های داخل ایران
                      </p>
                      <i class="bx bx-chevron-up bx-sm"></i>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="card-row">
                      <Input placeHolder={"مقدار را وارد کنید"} />
                      <Input
                        placeHolder={"نرخ تبدیل هر واحد را وارد کنید ( تومان )"}
                      />
                    </div>
                    <div className="card-row">
                      <Input
                        placeHolder={"کشور مبداء حساب ارزی خود را انتخاب کنید"}
                      />
                      <Input placeHolder={"ارز را انتخاب کنید"} />
                    </div>
                    <div className="card-row">
                      <button className="primary-btn">ثبت اولیه و ادامه</button>
                      <button className="secondary-btn">
                        <Image src="/img/submit.svg" alt="submit" />
                        <p>مشاهده نحوه ی محاسبه ی کارمزد</p>
                      </button>
                    </div>
                  </div>
                </div>
              </TabContent>
            </TabMenu>
          </Tab>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Page;
