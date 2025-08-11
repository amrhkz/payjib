// TabNav.js
import React from "react";
import "@/components/Tab/TabNav/TabNav.css";

function TabNav({ children, activeTab, setActiveTab }) {
  const tabs = React.Children.toArray(children);

  return (
    <div className="tab-nav">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab-btn ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default TabNav;
