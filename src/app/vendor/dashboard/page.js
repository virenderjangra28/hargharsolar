"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../../../public/images/logo.png";
import { ADMIN_AUTH_KEY, ADMIN_USER } from "@/components/admin/adminUser";
import UserContext from "@/context/userContext";


const INPUT =
  "mt-1.5 h-12 w-full rounded-lg border border-line bg-[#f7f9fc] px-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white";

export default function DashBoard() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const context = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <section className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-screen">
        <img
          src="/images/welcome-hero-house.png"
          alt="Rooftop solar home"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/35 to-navy/20" />
        <div className="relative z-10 flex h-full flex-col justify-end px-10 py-12 text-white xl:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">HarGharSolar</p>
          <h1 className="mt-3 max-w-md text-4xl font-extrabold leading-tight xl:text-5xl">
            Power every home with clean rooftop solar
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-white/85">
            Sign in to review leads, schedule site visits, and keep every Gurugram rooftop request on track.
          </p>
        </div>
      </section>

     
    </div>
  );
}
