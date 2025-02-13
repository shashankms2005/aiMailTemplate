"use client";
import Canvas from "@/components/custom/Canvas";
import EditorHeador from "@/components/custom/EditorHeador";
import EditorSettings from "@/components/custom/EditorSettings";
import EditorSidebar from "@/components/custom/EditorSidebar";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

function Editor() {
  const [viewHTMLCode, setViewHtmlCode] = useState();

  return (
    <div>
      <ToastContainer />

      <EditorHeador viewHTMLCode={(v) => setViewHtmlCode(v)} />

      <div className="grid grid-cols-5">
        <EditorSidebar />
        <div className=" rounded-md p-1 col-span-3 bg-white/50 backdrop-blur-sm border border-white/10">
          <Canvas
            viewHTMLCode={viewHTMLCode}
            closeDialog={() => setViewHtmlCode(false)}
          />
        </div>
        <EditorSettings />
      </div>
    </div>
  );
}

export default Editor;
