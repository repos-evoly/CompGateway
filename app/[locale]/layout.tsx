import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import SideBar from "../components/SideBar/SideBar";
import MainLayoutClient from "../components/SideBar/MainLayoutClient";
import MainHeader from "../components/mainHeader/MainHeader";
import logoUrl from "@/design-system/images/logo.jpeg";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string }; // Make locale optional to avoid potential type issues
}) {
  // Ensure locale is correctly awaited
  const locale = params?.locale || "en"; // Fallback to "en" if locale is undefined

  try {
    // Fetch messages based on the locale
    const messages = await getMessages({ locale });

    // Determine directionality (RTL or LTR)
    const isRtl = locale === "ar";

    console.log("LocaleLayout Debug - Locale:", locale, "isRtl:", isRtl);

    return (
      <html className="h-full" lang={locale} dir={isRtl ? "rtl" : "ltr"}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <MainHeader title={"title"} logoUrl={logoUrl} isRtl={isRtl} />
            <MainLayoutClient isRtl={isRtl}>{children}</MainLayoutClient>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("LocaleLayout Error:", error);

    // Handle errors gracefully with a fallback
    return (
      <html className="h-full" lang="en" dir="ltr">
        <body>
          <div>An error occurred. Please refresh the page.</div>
        </body>
      </html>
    );
  }
}
