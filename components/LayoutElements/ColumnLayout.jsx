"use client";
import {
  useDragElementLayout,
  useEmailTemplate,
  useSelectedElement,
} from "@/app/provider";
import React, { useState } from "react";
import ButtonComponent from "../Elements/ButtonComponent";
import TextComponent from "../Elements/TextComponent";
import ImageComponent from "../Elements/ImageComponent";
import LogoComponent from "../Elements/LogoComponent";
import DividerComponent from "../Elements/DividerComponent";
import SocialIconsComponent from "../Elements/SocialIconsComponent";
import LogoHeader from "../Elements/LogoHeader";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";

function ColumnLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { selectedElement, setSelectedElement } = useSelectedElement();

  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout?.id,
    });
  };
  const onDropHandle = () => {
    const index = dragOver.index;
    setEmailTemplate((prevItem) =>
      prevItem?.map((col) =>
        col.id === layout?.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };

  const deleteLayout = (layoutId) => {
    const updateEmailTemplate = emailTemplate?.filter(
      (item) => item.id !== layoutId
    );
    setEmailTemplate(updateEmailTemplate);
    setSelectedElement(null);
  };

  const moveItemUp = (layoutId) => {
    const index = emailTemplate.findIndex((item) => item.id === layoutId);
    if (index > 0) {
      setEmailTemplate((prevItems) => {
        const updatedItems = [...prevItems];
        // Swap the current item with the one above it
        [updatedItems[index], updatedItems[index - 1]] = [
          updatedItems[index - 1],
          updatedItems[index],
        ];
        return updatedItems;
      });
    }
  };

  const moveItemDown = (layoutId) => {
    const index = emailTemplate.findIndex((item) => item.id === layoutId);
    if (index >= 0 && index < emailTemplate.length - 1) {
      setEmailTemplate((prevItems) => {
        const updatedItems = [...prevItems];
        // Swap the current item with the one below it
        [updatedItems[index], updatedItems[index + 1]] = [
          updatedItems[index + 1],
          updatedItems[index],
        ];
        return updatedItems;
      });
    }
  };

  const GetElementComponent = (element) => {
    if (element?.type == "Button") {
      return <ButtonComponent {...element} />;
    } else if (element?.type == "Text") {
      return <TextComponent {...element} />;
    } else if (element?.type == "Image") {
      return <ImageComponent {...element} />;
    } else if (element?.type == "Logo") {
      return <LogoComponent {...element} />;
    } else if (element?.type == "Divider") {
      return <DividerComponent {...element} />;
    } else if (element?.type == "SocialIcons") {
      return <SocialIconsComponent {...element} />;
    } else if (element?.type == "LogoHeader") {
      return <LogoHeader {...element} />;
    }
    return element?.type;
  };

  return (
    <div className="relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: "0px",
        }}
        className={`${
          selectedElement?.layout?.id == layout?.id &&
          "border border-dashed border-blue-500"
        }`}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div
            key={index}
            className={`p-2 flex items-center justify-center cursor-pointer
            ${selectedElement?.layout?.id == layout?.id && selectedElement?.index == index && "border-blue-500 border-4"}
          ${index === dragOver?.index && dragOver?.columnId ? "bg-green-100" : "bg-gray-100"}`}
            onDragOver={(event) => onDragOverHandle(event, index)}
            onDrop={onDropHandle}
            onClick={() => setSelectedElement({ layout: layout, index: index })}
          >
            {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
          </div>
        ))}
        {selectedElement?.layout?.id == layout?.id && (
          <div className="absolute cursor-pointer -right-14">
            <div
              onClick={() => deleteLayout(layout?.id)}
              className=" mb-0.5 bg-gray-100 p-2 rounded-full"
            >
              <Trash className="h-3 w-3" />
            </div>
            <div
              className="mb-0.5 cursor-pointer bg-gray-100 p-2 rounded-full hover:scale-105 transition-all hover:shadow-md"
              onClick={() => moveItemUp(layout.id)}
            >
              <ArrowUp className="h-3 w-3" />
            </div>

            <div
              className="cursor-pointer bg-gray-100 p-2 rounded-full hover:scale-105 transition-all hover:shadow-md"
              onClick={() => moveItemDown(layout.id)}
            >
              <ArrowDown className="h-3 w-3" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ColumnLayout;
