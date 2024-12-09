import React from "react";
import ComponentsTitle from "../../reusable/ComponentsTitle";
import { useTranslations } from "next-intl";

const CheckrequestForm = () => {
  const t = useTranslations("CheckRequest");

  return (
    <div>
      <ComponentsTitle title={t("title")} />
    </div>
  );
};

export default CheckrequestForm;
