// CheckRequestFieldsArray.ts
import { FormItemsProps } from "@/types";

export interface CheckRequestFieldConfig {
  section?: string; // Optional section title
  fields: {
    title: string; // Field title
    inputItems?: FormItemsProps; // Configuration for the input field
  }[];
}

const CheckRequestFieldsArray: CheckRequestFieldConfig[] = [
  {
    section: "branchInfo",
    fields: [
      {
        title: "branch", // Refers to the key in the translations
        inputItems: {
          inputType: "text",
          inputID: "branch",
          inputName: "branch",
          inputValue: "", // Default value
          onChange: () => {}, // Placeholder for the onChange handler
          error: [], // Add error messages if needed
          required: true, // Marks the field as required
        },
      },
    ],
  },
];

export default CheckRequestFieldsArray;
