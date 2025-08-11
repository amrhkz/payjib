// Tab.js
import React, { useState } from "react";
import "@/components/Tab/Tab.css";

function Tab({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  // برای یافتن تب‌های ناوبری و منوهای محتوا از children استفاده می‌کنیم
  const tabs = React.Children.toArray(children);
  const tabNav = tabs.find((tab) => tab.type.name === "TabNav");
  const tabMenu = tabs.find((tab) => tab.type.name === "TabMenu");

  // Prop ها را برای مدیریت تب فعال پاس می‌دهیم
  const clonedTabNav = React.cloneElement(tabNav, { activeTab, setActiveTab });
  const clonedTabMenu = React.cloneElement(tabMenu, { activeTab });

  return (
    <div className="tab-container">
      {clonedTabNav}
      {clonedTabMenu}
    </div>
  );
}

export default Tab;
