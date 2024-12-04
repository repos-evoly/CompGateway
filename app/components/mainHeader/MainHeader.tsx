import React from "react";
import Image from "next/image";
import { MainHeaderProps } from "@/types"; // Assuming you have your types defined in "@/types"
import { useTranslations } from "next-intl";

const MainHeader: React.FC<MainHeaderProps> = ({ logoUrl, isRtl }) => {
  const t = useTranslations("mainHeader");

  return (
    <header className="w-full h-20 flex items-center px-5 bg-info-dark">
      <div
        className={`flex-shrink-0 ${
          isRtl ? "order-2 ml-auto" : "order-0 mr-auto"
        } ${isRtl ? "scale-x-[-1]" : ""}`}
      >
        <Image
          src={logoUrl}
          alt="Logo"
          width={48} // Adjust width as necessary
          height={48} // Adjust height as necessary
        />
      </div>
      <h1 className="flex-1 text-center text-2xl font-semibold">
        {t("title")}
      </h1>
    </header>
  );
};

export default MainHeader;
