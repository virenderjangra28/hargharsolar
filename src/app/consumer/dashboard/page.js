"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../../../public/images/logo.png";
import { ADMIN_AUTH_KEY, ADMIN_USER } from "@/components/admin/adminUser";
import UserContext from "@/context/userContext";

const INPUT =
  "mt-1.5 h-12 w-full rounded-lg border border-line bg-[#f7f9fc] px-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white";

export default function LoginScreen() {      
        return (  
            <h1 className="text-3xl font-bold text-center mt-10">Consumer Dashboard</h1>
         )
}