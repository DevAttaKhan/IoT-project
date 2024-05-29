import React from "react";
import { Header, Navbar } from "@/components/common";

type Props = { children: React.ReactElement };

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen  bg-gray-100 pb-44">
      <Header />
      <div className="p-6 max-w-[1360px] mx-auto">
        {children}
        <Navbar />
      </div>
    </div>
  );
};
