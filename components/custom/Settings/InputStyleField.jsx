import { Input } from "@/components/ui/input";
import React from "react";

function InputStyleField({ label, value, onHandleStyleChange , type="px" }) {
  const FormattedValue = (value_) => {
    return Number(value_.toString().replace(type, ""));
  };

  return (
    <div>
      <label>{label}</label>
      <div className="flex items-center gap-1">
      <Input
        type="text"
        value={FormattedValue(value)}
        onChange={(e) => onHandleStyleChange(e.target.value + type)}
        className="w-[50%]"
      />
      <p className="bg-slate-500 rounded-r-md p-1.5 ">{type}</p>
      </div>
    </div>
  );
}

export default InputStyleField;
