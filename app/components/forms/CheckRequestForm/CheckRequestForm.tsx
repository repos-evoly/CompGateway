"use client";

import React, { useState } from "react";
import ComponentsTitle from "../../reusable/ComponentsTitle";
import { useTranslations } from "next-intl";
import CheckRequestFieldsArray, {
  CheckRequestFieldConfig,
} from "./CheckRequestFieldsArray";
import SingleRow from "../CBLForm/SingleRow";
import DoubleRow from "../CBLForm/DoubleRow";
import DashedTableSection from "./DashedTableSection";
import SignaturePad from "../../reusable/SignaturePad"; // Adjust path if needed

const CheckrequestForm = () => {
  const t = useTranslations("CheckRequest");
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const groupFields = (
    fields: CheckRequestFieldConfig["fields"]
  ): (
    | CheckRequestFieldConfig["fields"][number]
    | CheckRequestFieldConfig["fields"]
  )[] => {
    const grouped: (
      | CheckRequestFieldConfig["fields"][number]
      | CheckRequestFieldConfig["fields"]
    )[] = [];
    let tempGroup: CheckRequestFieldConfig["fields"] = [];

    fields.forEach((field) => {
      if (field.type === "double") {
        tempGroup.push(field);
      } else {
        if (tempGroup.length) {
          grouped.push(tempGroup);
          tempGroup = [];
        }
        grouped.push(field);
      }
    });

    if (tempGroup.length) grouped.push(tempGroup);

    return grouped;
  };

  return (
    <div>
      <ComponentsTitle title={t("title")} />
      <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
        {/* Render sections except accountInfo and signatureInfo */}
        {CheckRequestFieldsArray.filter(
          (section) =>
            section.section !== "accountInfo" &&
            section.section !== "signatureInfo"
        ).map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            {groupFields(section.fields).map((group, groupIndex) => {
              if (Array.isArray(group)) {
                return (
                  <DoubleRow
                    key={`double-${groupIndex}`}
                    rows={group.map((field) => ({
                      title: t(field.title),
                      inputItems: {
                        ...field.inputItems,
                        inputType: field.inputItems?.inputType || "text",
                        inputID: field.title,
                        inputValue: formData[field.title] || "",
                        onChange: (e) =>
                          handleInputChange(field.title, e.target.value),
                      },
                      extraText: field.extraTextKey
                        ? t(field.extraTextKey)
                        : undefined,
                    }))}
                  />
                );
              } else {
                return (
                  <SingleRow
                    key={`single-${groupIndex}`}
                    title={t(group.title)}
                    inputItems={{
                      ...group.inputItems,
                      inputType: group.inputItems?.inputType || "text",
                      inputID: group.title,
                      inputValue: formData[group.title] || "",
                      onChange: (e) =>
                        handleInputChange(group.title, e.target.value),
                    }}
                    extraText={
                      group.extraTextKey ? t(group.extraTextKey) : undefined
                    }
                  />
                );
              }
            })}
          </div>
        ))}
      </div>

      <DashedTableSection />

      {/* Render accountInfo and signatureInfo sections */}
      <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
        {["accountInfo", "signatureInfo"].map((sectionKey) => (
          <div key={sectionKey}>
            {groupFields(
              CheckRequestFieldsArray.find(
                (section) => section.section === sectionKey
              )?.fields || []
            ).map((group, groupIndex) => {
              if (Array.isArray(group)) {
                return (
                  <DoubleRow
                    key={`double-${sectionKey}-${groupIndex}`}
                    rows={group.map((field) => ({
                      title: t(field.title),
                      inputItems: {
                        ...field.inputItems,
                        inputType: field.inputItems?.inputType || "text",
                        inputID: field.title,
                        inputValue: formData[field.title] || "",
                        onChange: (e) =>
                          handleInputChange(field.title, e.target.value),
                      },
                      extraText: field.extraTextKey
                        ? t(field.extraTextKey)
                        : undefined,
                    }))}
                  />
                );
              } else if (group.useSignaturePad) {
                return (
                  <div
                    key={`signature-${groupIndex}`}
                    className="flex items-center gap-4"
                  >
                    <label
                      htmlFor={group.title}
                      className="text-sm font-medium text-gray-700"
                    >
                      {t(group.title)}
                    </label>
                    <SignaturePad />
                  </div>
                );
              } else {
                return (
                  <SingleRow
                    key={`single-${sectionKey}-${groupIndex}`}
                    title={t(group.title)}
                    inputItems={{
                      ...group.inputItems,
                      inputType: group.inputItems?.inputType || "text",
                      inputID: group.title,
                      inputValue: formData[group.title] || "",
                      onChange: (e) =>
                        handleInputChange(group.title, e.target.value),
                    }}
                    extraText={
                      group.extraTextKey ? t(group.extraTextKey) : undefined
                    }
                  />
                );
              }
            })}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <div>{t("note")}</div>
      </div>
    </div>
  );
};

export default CheckrequestForm;
