"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/components/dropdown/dropdown.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("یورو");
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pickCurrency" ref={dropdownRef}>
      <button type="button" className="currencyBtn" onClick={toggleMenu}>
        <span>ارز: {selectedCurrency}</span>
        <i className="bx bx-chevron-down bx-sm"></i>
      </button>
      <div className={`currencies ${isOpen ? "open" : ""}`}>
        {[
          "یورو",
          "پوند",
          "دلار کانادا",
          "لیر ترکیه",
          "کرون نروژ",
          "دلار استرالیا",
          "تتر",
          "کرون سوئد",
          "درهم امارات",
          "کرون دانمارک",
          "فرانک سوییس",
        ].map((currency) => (
          <div
            key={currency}
            className="currency"
            onClick={() => handleCurrencySelect(currency)}
          >
            {currency}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
