"use client";

import { LoginComp } from "@/components/login/loginComp";
import { Navbar3 } from "@/components/navbar3";

export default function RegistPage() {
  return (
    <div className="flex flex-col">
      <Navbar3 />
      <LoginComp />;
    </div>
  );
}
