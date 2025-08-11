"use client";
import React from "react";
import "@/components/questionBar/questionBar.css";

function QuestionBar({ title, question, isOpen, onToggle }) {
  return (
    <div className={`question ${isOpen ? "show" : ""}`}>
      <div className="top" onClick={onToggle}>
        <button>{title}</button>
        <i className={`bx bx-chevron-down bx-sm`}></i>
      </div>
      <div className={`bottom `}>{question}</div>
    </div>
  );
}

export default QuestionBar;
