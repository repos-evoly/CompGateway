"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { LocaleSwitcherProps } from "@/types";

export default function LocaleSwitcher({ isExpanded }: LocaleSwitcherProps) {
  const router = useRouter();
  const frameworkLocale = useLocale(); // Fetch the locale from `next-intl`

  // Local state to handle the button text and transitions
  const [currentLocale, setCurrentLocale] = useState(frameworkLocale);

  const toggleLocale = () => {
    const nextLocale = currentLocale === "en" ? "ar" : "en";

    console.log("Toggling Locale:");
    console.log("Current Locale:", currentLocale);
    console.log("Next Locale:", nextLocale);

    // Update the URL path to switch the locale
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ar)(\/|$)/, `/${nextLocale}/`);

    console.log("Current Path:", currentPath);
    console.log("New Path:", newPath);

    if (currentPath !== newPath) {
      setCurrentLocale(nextLocale); // Update local state immediately
      router.replace(newPath); // Trigger navigation to the new locale
    }
  };

  useEffect(() => {
    // Sync the local state with the framework's locale when it changes
    if (currentLocale !== frameworkLocale) {
      console.log("Syncing locale with frameworkLocale:");
      console.log("Framework Locale:", frameworkLocale);
      console.log("Current Locale:", currentLocale);

      setCurrentLocale(frameworkLocale); // Keep the button text consistent with the current locale
    }
  }, [frameworkLocale]);

  // Debug logs for rendering
  console.log("Rendering LocaleSwitcher:");
  console.log("Framework Locale:", frameworkLocale);
  console.log("Local State:", currentLocale);

  return (
    <button
      onClick={toggleLocale}
      className="w-full flex items-center justify-center p-4 bg-info-main text-main hover:bg-yellow-400 hover:text-white transition-all duration-300"
    >
      <IoLanguage className="mr-2" />
      {isExpanded && (currentLocale === "en" ? "العربية" : "English")}
    </button>
  );
}
