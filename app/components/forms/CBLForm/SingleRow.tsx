import React from "react";
import FormItems from "../../reusable/FormItems"; // Adjust the path based on your project structure
import SignatureComponent from "../../reusable/SignaturePad"; // Adjust the path based on your project structure
import { FormItemsProps } from "@/types"; // Adjust the path based on your types file

interface SingleRowProps {
  title: string;
  inputItems?: FormItemsProps; // Props to be passed to the FormItems component (optional if using signaturePad)
  noBorder?: boolean; // Prop to conditionally remove the border
  extraText?: string; // Optional prop for additional span text
  useSignaturePad?: boolean; // New optional prop for rendering the signature pad
}

const SingleRow: React.FC<SingleRowProps> = ({
  title,
  inputItems,
  noBorder = false,
  extraText,
  useSignaturePad = false, // Default to false
}) => {
  return (
    <div
      className={`p-4 my-4 bg-white rounded-lg shadow-md border border-gray-300 ${
        noBorder ? "" : "border-b border-gray-100"
      }`}
    >
      {/* Title */}
      <div className="flex items-center">
        <div className="flex-shrink-0 ltr:pr-4 rtl:pl-4 text-sm font-semibold text-text-dark">
          {title}
        </div>

        {/* Input or Signature Pad */}
        <div className="flex-grow flex items-center rtl:gap-4 ltr:gap-2">
          {useSignaturePad ? (
            <div className="w-full">
              <SignatureComponent />
            </div>
          ) : (
            inputItems && (
              <div className="w-full">
                <FormItems {...inputItems} />
              </div>
            )
          )}
          {extraText && (
            <span className="text-xs font-medium text-secondary-dark">
              {extraText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRow;
