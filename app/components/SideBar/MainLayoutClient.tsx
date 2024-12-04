// MainLayoutClient.tsx
"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import SideBar from "./SideBar";
import MainHeader from "../mainHeader/MainHeader";

export default function MainLayoutClient({
  children,
  isRtl,
}: {
  children: ReactNode;
  isRtl: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/en/login");
    }
  }, [router]);

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar isRtl={isRtl} />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
