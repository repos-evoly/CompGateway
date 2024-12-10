"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSignOutAlt } from "react-icons/fa";
import SideBarItems from "./SideBarItems";
import { sideBarItemsArray } from "./SideBarArray";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher"; // Import LocaleSwitcher
import { SideBarProps } from "@/types";

const SideBar: React.FC<SideBarProps> = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Initially expanded

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded/collapsed state
  };

  const t = useTranslations("sidebarItems");

  return (
    <div
      className={`h-screen bg-info-dark text-white flex flex-col justify-between z-50 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      {/* Scrollable section for sidebar items */}
      <div className="flex-grow overflow-y-auto">
        <div className="p-4 flex justify-between items-center">
          <h2
            className={`text-2xl font-bold mb-6 ${
              isExpanded ? "block" : "hidden"
            }`}
          >
            {t("title")}
          </h2>
          <button onClick={toggleSidebar} className="text-white">
            {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        {/* Render sidebar items */}
        <ul>
          {sideBarItemsArray.map((item, index) => (
            <SideBarItems
              key={index}
              href={item.href}
              label={t(item.labelKey)} // Translate the label key
              icon={item.icon}
              isExpanded={isExpanded} // Pass the sidebar expanded/collapsed state
              tooltipContent={item.tip} // Tooltip content
              combo={item.combo}
              subItems={
                item.subItems?.map((subItem) => ({
                  href: subItem.href,
                  label: t(subItem.labelKey),
                  icon: subItem.icon,
                  isExpanded: isExpanded,
                  tooltipContent: subItem.tip,
                })) || [] // Ensure subItems are passed as an array
              }
            />
          ))}
        </ul>
      </div>

      {/* Fixed section for LocaleSwitcher and Logout */}
      <div>
        <LocaleSwitcher isExpanded={isExpanded} />
        <button className="w-full flex items-center justify-center p-4 bg-info-dark text-info-light hover:bg-red-600 hover:text-white transition-all duration-300">
          <FaSignOutAlt className="mr-2" />
          {isExpanded && t("logout")}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
