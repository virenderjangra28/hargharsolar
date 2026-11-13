"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/query", label: "Query" },
  { href: "/admin/commercial", label: "Commercial" },
  { href: "/admin/housing-society", label: "Housing Society" }
];

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function LeftMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const context = useContext(UserContext);
  const user = context?.user || {};

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  async function logout() {
    // window.sessionStorage.removeItem(ADMIN_AUTH_KEY);
    localStorage.removeItem('sessiondata');
    await fetch("/api/logout", { method: "POST" });
    context.logout();
    router.push("/");
  }

  if (!pathname.startsWith("/admin/") || pathname === "/vendor/") {
    return null;
  }
//   if (!pathname.startsWith("/consumer/") || pathname === "/consumer/login") {
//     return null;
//   }

  return (
    <>
      <div className="sticky top-14 z-30 mt-4 flex items-center justify-between rounded-xl bg-navy px-4 py-3 sm:top-16 md:hidden">
        <p className="text-sm font-semibold text-white">Admin menu</p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg border border-white/20 px-3 py-1.5 text-sm font-semibold text-white"
          aria-expanded={open}
          aria-controls="admin-sidebar"
        >
          Menu
        </button>
      </div>

      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/45 md:hidden"
        />
      ) : null}

      <aside
        id="admin-sidebar"
        className={`fixed top-14 right-auto bottom-0 left-0 z-50 flex w-[min(280px,85vw)] flex-col bg-navy text-white shadow-xl transition-transform sm:top-16 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-white/10 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-mint">
            Logged in as
          </p>
          <div className="mt-3 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold">
              {initials(user.name || "User")}
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold">{user.name || "Account"}</p>
              <p className="mt-0.5 truncate text-xs text-white/70">
                {user.email || ""}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  active
                    ? "bg-white text-navy"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-3">
          <button
            type="button"
            onClick={logout}
            className="w-full rounded-lg border border-white/20 px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="hidden md:flex md:h-full md:w-64 md:shrink-0 md:flex-col md:py-8">
        <aside className="flex h-full flex-col rounded-2xl bg-navy text-white">
          <div className="border-b border-white/10 px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-mint">
              Logged in as
            </p>
            <div className="mt-3 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold">
                {initials(user.name || "User")}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold">{user.name || "Account"}</p>
                <p className="mt-0.5 truncate text-xs text-white/70">
                  {user.email || ""}
                </p>
              </div>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                    active
                      ? "bg-white text-navy"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-3">
            <button
              type="button"
              onClick={logout}
              className="w-full rounded-lg border border-white/20 px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
