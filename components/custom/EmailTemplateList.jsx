import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useConvex } from "convex/react";
import { useUserDetails } from "@/app/provider";
import { api } from "@/convex/_generated/api";
import Image from "next/image";

const EmailTemplateList = () => {
  const [emailList, setEmailList] = useState([]);
  const convex = useConvex();
  const { userDetail, setUserDetail } = useUserDetails();

  useEffect(() => {
    userDetail && GetTemplateList();
  }, [userDetail]);

  const GetTemplateList = async () => {
    const result = await convex.query(api.emailTemplates.GetAllUserTemplate, {
      email: userDetail?.email,
    });
    setEmailList(result);
  };

  return (
    <div>
      <h2 className="text-primary font-semibold text-[24px]">Workspace</h2>
      <div>
        {emailList?.length === 0 ? (
          <div className="relative h-screen] mt-5">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/dashboardBg.jpg')] opacity-40"></div>
            <div className="relative grid place-content-center p-8 h-[50vh] backdrop-blur-sm bg-white/20  rounded-lg hover:bg-white/30">
              <Link href="dashboard/create">
                <Button className="text-white">+ Create Template</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {emailList?.map((item, index) => (
              <div key={index} className="p-5 rounded-lg shadow-md border-2">
                <Image
                  src={"/emailbox.png"}
                  alt="email"
                  width={200}
                  height={200}
                  className="w-full"
                />

                <h2 className="mt-2 text-white font-semibold text-center">{item?.description}</h2>
                <Link href={`/editor/` + item.tid}>
                <Button className="mt-2 w-full">View/Edit</Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailTemplateList;
