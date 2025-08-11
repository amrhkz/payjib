// TabMenu.js
import React from "react";
import "@/components/Tab/TabMenu/TabMenu.css";

function TabMenu({ children, activeTab }) {
  const menus = React.Children.toArray(children);

  return (
    <div className="tab-menu">
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`tab-content ${activeTab === index ? "active" : ""}`}
        >
          {menu}
        </div>
      ))}
    </div>
  );
}

export default TabMenu;
