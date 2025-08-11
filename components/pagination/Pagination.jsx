"use client";
import React, { useState } from "react";
import "./pagination.css";
import Card from "../card/Card";

const mockData = [
  {
    id: 1,
    amount: "150",
    price: "65,000",
    transfer: "Revolut",
    country: "فرانسه",
    flag: "/img/FR.png",
    date: "1403/6/19",
    expire: "2",
  },
  {
    id: 2,
    amount: "200",
    price: "70,000",
    transfer: "PayPal",
    country: "آلمان",
    flag: "/img/coin-2.svg",
    date: "1403/6/20",
    expire: "3",
  },
  {
    id: 3,
    amount: "300",
    price: "75,000",
    transfer: "Bank",
    country: "انگلیس",
    flag: "/img/coin-3.svg",
    date: "1403/6/21",
    expire: "1",
  },
  {
    id: 4,
    amount: "100",
    price: "60,000",
    transfer: "Western Union",
    country: "ایتالیا",
    flag: "/img/coin-4.svg",
    date: "1403/6/22",
    expire: "2",
  },
  {
    id: 5,
    amount: "250",
    price: "80,000",
    transfer: "Cash",
    country: "اسپانیا",
    flag: "/img/coin-5.svg",
    date: "1403/6/23",
    expire: "4",
  },
  {
    id: 6,
    amount: "180",
    price: "66,000",
    transfer: "Crypto",
    country: "سوئیس",
    flag: "/img/coin-6.svg",
    date: "1403/6/24",
    expire: "5",
  },
  {
    id: 7,
    amount: "220",
    price: "85,000",
    transfer: "Transferwise",
    country: "هلند",
    flag: "/img/NL.png",
    date: "1403/6/25",
    expire: "6",
  },
  {
    id: 8,
    amount: "160",
    price: "62,000",
    transfer: "Revolut",
    country: "بلژیک",
    flag: "/img/coin-8.svg",
    date: "1403/6/26",
    expire: "2",
  },
  {
    id: 9,
    amount: "190",
    price: "68,000",
    transfer: "PayPal",
    country: "سوئد",
    flag: "/img/coin-9.svg",
    date: "1403/6/27",
    expire: "3",
  },
  {
    id: 10,
    amount: "175",
    price: "67,000",
    transfer: "Bank",
    country: "نروژ",
    flag: "/img/coin-10.svg",
    date: "1403/6/28",
    expire: "4",
  },
  {
    id: 11,
    amount: "155",
    price: "64,000",
    transfer: "Western Union",
    country: "دانمارک",
    flag: "/img/coin-11.svg",
    date: "1403/6/29",
    expire: "5",
  },
  {
    id: 12,
    amount: "260",
    price: "82,000",
    transfer: "Cash",
    country: "فنلاند",
    flag: "/img/coin-12.svg",
    date: "1403/6/30",
    expire: "6",
  },
  {
    id: 13,
    amount: "140",
    price: "63,000",
    transfer: "Crypto",
    country: "آمریکا",
    flag: "/img/coin-13.svg",
    date: "1403/7/1",
    expire: "1",
  },
  {
    id: 14,
    amount: "170",
    price: "69,000",
    transfer: "Transferwise",
    country: "کانادا",
    flag: "/img/coin-14.svg",
    date: "1403/7/2",
    expire: "2",
  },
  {
    id: 15,
    amount: "280",
    price: "90,000",
    transfer: "Revolut",
    country: "استرالیا",
    flag: "/img/coin-15.svg",
    date: "1403/7/3",
    expire: "3",
  },
  {
    id: 16,
    amount: "185",
    price: "71,000",
    transfer: "PayPal",
    country: "ژاپن",
    flag: "/img/coin-16.svg",
    date: "1403/7/4",
    expire: "4",
  },
];

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = mockData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(mockData.length / rowsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => typeof number === "number" && setCurrentPage(number)}
        className={`page-number ${currentPage === number ? "active" : ""}`}
        disabled={typeof number !== "number"}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="request-list">
      {currentRows.map((row) => (
        <Card
          key={row.id}
          reqNum={row.id}
          amount={row.amount}
          price={row.price}
          transfer={row.transfer}
          country={row.country}
          flag={row.flag}
          date={row.date}
          expire={row.expire}
        />
      ))}
      <div className="table-bottom">
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <i className="bx bx-chevron-right bx-sm"></i>
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <i className="bx bx-chevron-left bx-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
