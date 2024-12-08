import React from "react";
import SingleRow from "./SingleRow";
import { FormItemsProps } from "@/types";

interface DoubleRowProps {
  rows: {
    title: string;
    inputItems?: FormItemsProps; // Make inputItems optional for signaturePad rows
    extraText?: string;
    useSignaturePad?: boolean; // Add useSignaturePad prop
  }[];
}

const DoubleRow: React.FC<DoubleRowProps> = ({ rows }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {rows.map((row, index) => (
        <SingleRow
          key={index}
          title={row.title}
          inputItems={row.inputItems} // Pass inputItems when provided
          extraText={row.extraText}
          useSignaturePad={row.useSignaturePad ?? false} // Pass useSignaturePad
        />
      ))}
    </div>
  );
};

export default DoubleRow;