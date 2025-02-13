import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ViewHtmlDialog({ openDialog, htmlCode, closeDialog }) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(htmlCode)
      .then(() => {
        toast.success("Copied to clipboard!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent className="bg-[#47178b] text-white">
        <DialogHeader>
          <DialogTitle  asChild>
            <div className="flex items-center gap-6">
              <h2 className="text-yellow-200 text-xl">HTML Email Template</h2>
              <button onClick={copyToClipboard} className="hover:opacity-80">
                <Copy className="text-white cursor-pointer" />
              </button>
            </div>
          </DialogTitle>
          <DialogDescription asChild>
            <div className="max-h-[400px] overflow-auto bg-gray-950 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap break-all">
                <code className="text-white">{htmlCode}</code>
              </pre>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ViewHtmlDialog;
