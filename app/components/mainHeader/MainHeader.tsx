// src/components/MainHeader.tsx
import React from "react";
import Image from "next/image";
import { MainHeaderProps } from "@/types"; // Assuming you have your types defined in "@/types"
import { useTranslations } from "next-intl";

const MainHeader: React.FC<MainHeaderProps> = ({ logoUrl, isRtl }) => {
  const t = useTranslations("mainHeader");
  return (
    <header className="w-full h-20 flex items-center px-5 bg-info-dark">
      <div
        style={{
          order: isRtl ? 2 : 0, // Position logo on the right if RTL, otherwise on the left
          marginLeft: isRtl ? "auto" : 0,
          marginRight: isRtl ? 0 : "auto",
        }}
      >
        <Image
          src={logoUrl}
          alt="Logo"
          width={48} // Adjust width as necessary
          height={48} // Adjust height as necessary
          layout="fixed" // Using fixed layout for defined width and height
        />
      </div>
      <h1 className="flex-1 text-center text-2xl font-semibold">
        {t("title")}
      </h1>
    </header>
  );
};

export default MainHeader;
