import Layout from "@/Data/Layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/Data/ElementList";

function ElementsSideBar() {
  return (
    <div className="p-5">
      <p className=" text-white font-semibold ">Layouts</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.isArray(Layout) &&
          Layout.map((layout, index) => (
            <ElementLayoutCard layout={layout} key={index} />
          ))}
      </div>

      <p className="mt-3 text-white font-semibold ">Elements</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.isArray(Layout) &&
          ElementList.map((layout, index) => (
            <ElementLayoutCard layout={layout} key={index} />
          ))}
      </div>
    </div>
  );
}

export default ElementsSideBar;
