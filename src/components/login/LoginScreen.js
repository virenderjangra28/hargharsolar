"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../../public/images/logo.png";
import { ADMIN_AUTH_KEY, ADMIN_USER } from "@/components/admin/adminUser";

const INPUT =
  "mt-1.5 h-12 w-full rounded-lg border border-line bg-[#f7f9fc] px-4 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white";

export default function LoginScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "", form: "" }));
  }

  function validate() {
    const next = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!form.password.trim()) {
      next.password = "Enter your password.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setErrors({ form: data.error || "Email or password is incorrect." });
        return;
      }

      window.sessionStorage.setItem(
        ADMIN_AUTH_KEY,
        JSON.stringify({
          email: data.user?.email || form.email,
          name: data.user?.name || ADMIN_USER.name,
          token: data.token,
        }),
      );
      router.push("/admin/dashboard");
    } catch (error) {
      setErrors({ form: "Unable to login. Please try again." });
    }
  }

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

      <section className="flex items-center justify-center bg-[#f4f7fb] px-4 py-10 sm:px-8">
        <div className="w-full max-w-[420px] rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
          <a href="/" aria-label="HarGharSolar home">
            <Image
              src={Logo}
              alt="HarGharSolar logo"
              width={283}
              height={100}
              className="h-auto w-[160px]"
              priority
            />
          </a>
          <h2 className="mt-6 text-2xl font-extrabold text-navy">Admin login</h2>
          <p className="mt-1 text-sm text-muted">Enter your details to open the request dashboard.</p>

          <form className="mt-6" onSubmit={handleSubmit} noValidate>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="admin@hargharsolar.com"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                className={INPUT}
              />
              {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-semibold text-ink">Password</span>
              <span className="relative mt-1.5 block">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={(event) => update("password", event.target.value)}
                  className={`${INPUT} mt-0 pr-16`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-semibold text-sky"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </span>
              {errors.password ? <p className="mt-1 text-xs text-red-600">{errors.password}</p> : null}
            </label>

            {errors.form ? <p className="mt-4 text-sm text-red-600">{errors.form}</p> : null}

            <button
              type="submit"
              className="mt-6 h-12 w-full rounded-lg bg-navy text-sm font-semibold text-white transition hover:bg-navy-mid"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
