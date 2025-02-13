import React, { useState } from "react";
import { Button } from "../ui/button";

const EmailTemplateList = () => {
  const [emailList, setEmailList] = useState([]);
  return (
    <div>
      <h2 className="text-primary font-semibold text-[24px]">Workspace</h2>
      <div>
        {emailList?.length === 0 ? (
          <div className="relative h-screen] mt-5">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/dashboardBg.jpg')] opacity-40"></div>
            <div className="relative grid place-content-center p-8 h-[50vh] backdrop-blur-sm bg-white/20  rounded-lg hover:bg-white/30">
              <Button className="text-white">+ Create Template</Button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default EmailTemplateList;
