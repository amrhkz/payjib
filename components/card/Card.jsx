import React from "react";
import "@/components/card/card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="row">
        <div className="item req-id">
          <p>درخواست {props.reqNum} | درحال انتظار</p>
        </div>
        <div className="item">
          <button className="sell-btn">
            <p>ثبت پیشنهاد فروش</p>
            <i class="bx bx-chevron-left bx-sm"></i>
          </button>
        </div>
      </div>
      <div className="row-col">
        <div className="item">خرید {props.amount} یورو</div>
        <div className="item">نرخ تبدیل پیشنهادی: {props.price} تومان</div>
        <div className="item">نوع انتقال: {props.transfer}</div>
      </div>
      <div className="row col">
        <div className="item country">
          <p>از {props.country}</p>
          <div className="flag">
            <img src={`${props.flag}`} alt="" />
          </div>
        </div>
        <div className="item date">
          <div className="date">ثبت: {props.date}</div>
          <div className="sep"></div>
          <div className="expire">اعتبار: در {props.expire} روز</div>
        </div>
      </div>
      <hr />
      <button className="sell-btn">
        <p>ثبت پیشنهاد فروش</p>
      </button>
    </div>
  );
}

export default Card;
