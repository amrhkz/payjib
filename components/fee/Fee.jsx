import React from "react";
import "@/components/fee/fee.css";
import Dropdown from "../dropdown/Dropdown";
import Container from "../container/Container";

function Fee() {
  return (
    <div className="fee">
      <Container>
        <div className="content">
          <div className="right">
            <h1>کارمزد پی‌جیب برای تبادل</h1>
            <Dropdown />
          </div>
          <div className="left">
            <div className="chart">
              <div className="tag-row">
                <div className="right">حجم تراکنش (یورو)</div>
                <div className="left">کارمزد</div>
              </div>
              <div className="row">
                <div className="right">از 1 تا 49</div>
                <div className="left">2.00 یورو</div>
              </div>
              <div className="row">
                <div className="right">از 1 تا 49</div>
                <div className="left">2.00 یورو</div>
              </div>
              <div className="row">
                <div className="right">از 1 تا 49</div>
                <div className="left">2.00 یورو</div>
              </div>
              <div className="row">
                <div className="right">از 1 تا 49</div>
                <div className="left">2.00 یورو</div>
              </div>
              <div className="row">
                <div className="right">از 1 تا 49</div>
                <div className="left">2.00 یورو</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Fee;
