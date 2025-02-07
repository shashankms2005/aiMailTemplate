"use client";
import {
  useDragElementLayout,
  useEmailTemplate,
  useScreenSize,
} from "@/app/provider";
import React, { useState } from "react";
import ColumnLayout from "../LayoutElements/ColumnLayout";

const Canvas = () => {
  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [draggble, setDraggble] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    setDraggble(true);
  };

  const onDropHandle = () => {
    console.log(dragElementLayout?.dragLayout);
    setDraggble(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((prev) => [...prev, dragElementLayout?.dragLayout]);
    }
  };

  const getLayoutComponent = (layout) => {
    if (layout?.type === "column") {
      return <ColumnLayout layout={layout} />;
    }
  };

  return (
    <div className="mt-20 flex justify-center">
      <div
        onDragOver={onDragOver}
        onDrop={onDropHandle} // Fixed function call issue
        className={` p-6 w-full ${draggble == true ? `bg-[#936dcf]` : `bg-white`} ${
          screenSize === "desktop" ? "max-w-2xl" : "max-w-md"
        }`}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout, index) => (
            <div key={index}>{getLayoutComponent(layout)}</div>
          ))
        ) : (
          <h2 className="text-center font-bold p-5 bg-[#936dcf]">
            Add Layout Here
          </h2>
        )}
      </div>
    </div>
  );
};

export default Canvas;
