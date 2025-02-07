"use client";
import Layout from "@/Data/Layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/Data/ElementList";
import { useDragElementLayout } from "@/app/provider";

function ElementsSideBar() {
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const onDragLayoutStart = (layout) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    });
  };

  const onDragElementStart = (element) => {
    setDragElementLayout({
      dragElement: {
        ...element,
        id: Date.now(),
      },
    });
  };

  return (
    <div className="p-5">
      <p className=" text-white font-semibold ">Layouts</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.isArray(Layout) &&
          Layout.map((layout, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => onDragLayoutStart(layout)}
            >
              <ElementLayoutCard layout={layout} />
            </div>
          ))}
      </div>

      <p className="mt-3 text-white font-semibold ">Elements</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.isArray(Layout) &&
          ElementList.map((element, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => onDragElementStart(element)}
            >
              <ElementLayoutCard layout={element} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ElementsSideBar;
