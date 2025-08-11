import React from "react";
import "@/components/container/Container.css";

function Container({ children }) {
  return (
    <div className="page-content">
      <div className="container">{children}</div>
    </div>
  );
}

export default Container;
