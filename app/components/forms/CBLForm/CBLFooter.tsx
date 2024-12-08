"use client";

import React from "react";
import SingleRow from "./SingleRow";
import DoubleRow from "./DoubleRow";
import { CBLFooterArray, FieldConfig } from "./CBLFieldsArray";
import { useTranslations } from "next-intl";

const CBLFooter = () => {
  const t = useTranslations("cblForm.footerArray");

  // Helper function to group consecutive double rows
  const groupFields = (
    fields: FieldConfig[]
  ): (FieldConfig | FieldConfig[])[] => {
    const grouped: (FieldConfig | FieldConfig[])[] = [];
    let tempGroup: FieldConfig[] = [];

    fields.forEach((field) => {
      if (field.type === "double") {
        tempGroup.push(field);
      } else {
        if (tempGroup.length) {
          grouped.push(tempGroup);
          tempGroup = [];
        }
        grouped.push(field); // Single row added directly
      }
    });

    if (tempGroup.length) grouped.push(tempGroup); // Push any remaining double rows

    return grouped;
  };

  const groupedFields = groupFields(CBLFooterArray);

  return (
    <div className="p-6">
      {groupedFields.map((group, index) => {
        if (Array.isArray(group)) {
          // Render double rows
          return (
            <DoubleRow
              key={index}
              rows={group.map((field) => ({
                title: t(field.title),
                inputItems: field.inputItems,
                extraText: field.extraTextKey
                  ? t(field.extraTextKey)
                  : undefined,
                useSignaturePad: field.useSignaturePad ?? false, // Pass the useSignaturePad prop
              }))}
            />
          );
        } else {
          // Render single row
          return (
            <SingleRow
              key={index}
              title={t(group.title)}
              inputItems={group.inputItems}
              extraText={group.extraTextKey ? t(group.extraTextKey) : undefined}
              useSignaturePad={group.useSignaturePad ?? false} // Pass the useSignaturePad prop
            />
          );
        }
      })}

      {/* Span added below everything */}
      <span className="block mt-6 text-sm text-gray-500">
        {t("addionalLine")}
      </span>
    </div>
  );
};

export default CBLFooter;
