"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useExpertModal } from "@/components/ExpertModalContext";
import Logo from "./../../public/images/logo.png";
import { HARYANA_CITIES, rooftopSolarPath } from "./haryanaCities";
import UserContext from "@/context/userContext";
import { getDashboardRoute } from "@/lib/dashboardRoute";

function HomeOfferingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0 text-[#818584]">
      <path d="M3.5 10.5L11 4l7.5 6.5V18a1 1 0 01-1 1h-4.2v-5.2H8.7V19H4.5a1 1 0 01-1-1v-7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function CommercialOfferingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0 text-[#818584]">
      <rect x="4" y="3.5" width="14" height="15.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 7h2M12.5 7h2M7.5 10.5h2M12.5 10.5h2M7.5 14h2M12.5 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HousingOfferingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0 text-[#818584]">
      <path d="M3.5 18.5V8.5L8 5l4.5 3.5v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12.5 10.5h6v8h-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 11.5h2M6 14.5h2M15 13h2M15 15.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const OFFERINGS = [
  { label: "Home", href: "/", icon: <HomeOfferingIcon /> },
  { label: "Commercial", href: "/commercial", icon: <CommercialOfferingIcon /> },
  { label: "Housing Societies", href: "/housing-societies", icon: <HousingOfferingIcon /> },
];

function OnGridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0 text-[#818584]">
      <rect x="2.5" y="3.5" width="10" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 7.5h10M7.5 3.5v8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14.5 6.5h3.2M16.1 6.5v9.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.2 11.2h3.8M14.2 13.6h3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 14.5h6.5v4H3.5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.2 14.5v-1.4h3.1V14.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.2 16.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function OffGridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="shrink-0 text-[#818584]">
      <rect x="2.5" y="3.5" width="10" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 7.5h10M7.5 3.5v8" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="5" width="5.5" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.4 5V4.2h2.7V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15.6 8.4h2.4M15.6 10.6h2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 14.5h6.5v4H3.5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.2 14.5v-1.4h3.1V14.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.75 14.2v2.1M15.5 15.25h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const SOLUTIONS = [
  { label: "On-Grid Solar", href: "/on-grid-solar", icon: <OnGridIcon /> },
  { label: "Off-Grid Solar", href: "/off-grid-solar", icon: <OffGridIcon /> },
];

const MORE = [
  { label: "Solar Calculator", href: "/solar-calculator" },
  { label: "PM Surya Ghar Yojana", href: "/pm-surya-ghar-yojana" },
  { label: "Refer & Earn", href: "/refer-and-earn" },
  { label: "Queries", href: "/queries" },
];

const LOGIN = [
  { label: "Consumer Login", href: "/consumer/login" },
  { label: "Vendor Login", href: "/vendor/login" },
  { label: "Admin Login", href: "/login" }
];


function Chevron({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`ml-1 transition ${open ? "rotate-180" : ""}`}
    >
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Dropdown({ id, label, children, align = "left" }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        className="inline-flex items-center text-sm font-semibold text-navy hover:text-sky"
      >
        {label}
        <Chevron open={open} />
      </button>
      {open ? (
        <div
          id={id}
          className={`absolute top-full z-50 min-w-[220px] pt-3 ${align === "right" ? "right-0" : "left-0"}`}
        >
          <div className="rounded-xl border border-line bg-white py-2 shadow-lg">{children}</div>
        </div>
      ) : null}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useExpertModal();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdmin = pathname.startsWith("/admin");
  const isVendor = pathname.startsWith("/vendor");
  const isConsumer = pathname.startsWith("/consumer");
  const context = useContext(UserContext);
  const user = context?.user;
  const dashboardRoute = getDashboardRoute(user?.role);
  const router = useRouter();

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/login")) {
    return null;
  }

  function toggleMenu(id) {
    setOpenMenu((current) => (current === id ? null : id));
  }

  function quote() {
    setMobileOpen(false);
    setOpenMenu(null);
    openModal();
  }

   async function logout() {
    // window.sessionStorage.removeItem(ADMIN_AUTH_KEY);
    localStorage.removeItem('sessiondata');
    await fetch("/api/logout", { method: "POST" });
    context.logout();
    router.push("/");
  }


  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-site items-center px-4 sm:h-16 sm:px-6 md:h-[72px] md:px-8">
          <a href="/" aria-label="HarGharSolar home" className="shrink-0">
            <Image
              src={Logo}
              alt="HarGharSolar logo"
              width={283}
              height={100}
              className="h-auto w-[140px] sm:w-[160px] md:w-[180px]"
              priority
            />
          </a>

          {!isAdmin && !isVendor && !isConsumer ? (
            <div className="ml-auto flex items-center gap-6">
              <nav className="hidden items-center gap-7 lg:flex">
                <Dropdown id="offerings-menu" label="Our Offerings">
                  {OFFERINGS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy hover:bg-sky-soft"
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  ))}
                </Dropdown>

                <Dropdown id="solutions-menu" label="Solar Solutions">
                  {SOLUTIONS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy hover:bg-sky-soft"
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  ))}
                </Dropdown>

                <Dropdown id="cities-menu" label="Cities">
                  <div className="grid max-h-72 grid-cols-2 gap-x-2 overflow-y-auto">
                    {HARYANA_CITIES.map((city) => (
                      <a
                        key={city}
                        href={rooftopSolarPath(city)}
                        className="px-4 py-2 text-left text-sm text-navy hover:bg-sky-soft"
                      >
                        {city}
                      </a>
                    ))}
                  </div>
                </Dropdown>

                <a href="/#faq" className="text-sm font-semibold text-navy hover:text-sky">
                  FAQs
                </a>

                <Dropdown id="more-menu" label="More" align="right">
                  {MORE.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-navy hover:bg-sky-soft"
                    >
                      {item.label}
                    </a>
                  ))}
                </Dropdown>
                {user ? (
                  <Dropdown id="login-menu" label={user.name || "Login"} align="right">
                    {dashboardRoute ? (
                      <a
                        href={dashboardRoute}
                        className="block px-4 py-2 text-sm text-navy hover:bg-sky-soft"
                      >
                        Dashboard
                      </a>
                    ) : null}
                    <button
                      type="button"
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-navy hover:bg-sky-soft"
                    >
                      Logout
                    </button>
                  </Dropdown>
                ) : (
                  <Dropdown id="login-menu" label="Login" align="right">
                  {LOGIN.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-navy hover:bg-sky-soft"
                    >
                      {item.label}
                    </a>
                  ))}
                </Dropdown>
                )}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={quote}
                  className="hidden rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white sm:inline-flex"
                >
                  Get Free Quote
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-navy lg:hidden"
                  aria-expanded={mobileOpen}
                  aria-label="Open menu"
                  onClick={() => setMobileOpen((open) => !open)}
                >
                  {mobileOpen ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {mobileOpen && !isAdmin && !isVendor && !isConsumer ? (
          <div className="max-h-[min(70vh,calc(100dvh-3.5rem))] overflow-y-auto border-t border-line bg-white px-4 py-4 sm:max-h-[min(70vh,calc(100dvh-4rem))] md:max-h-[min(70vh,calc(100dvh-72px))] lg:hidden">
            <div className="mx-auto max-w-site space-y-3">
              {[
                { id: "offerings", label: "Our Offerings", items: OFFERINGS },
                { id: "solutions", label: "Solar Solutions", items: SOLUTIONS },
                { id: "more", label: "More", items: MORE },
                { id: "login", label: "Login", items: LOGIN },
              ].map((group) => (
                <div key={group.id}>
                  <button
                    type="button"
                    onClick={() => toggleMenu(group.id)}
                    className="flex w-full items-center justify-between py-2 text-sm font-semibold text-navy"
                  >
                    {group.label}
                    <Chevron open={openMenu === group.id} />
                  </button>
                  {openMenu === group.id ? (
                    <div className="pb-2 pl-2">
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 py-2 text-sm text-muted"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.icon}
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <div>
                <button
                  type="button"
                  onClick={() => toggleMenu("cities")}
                  className="flex w-full items-center justify-between py-2 text-sm font-semibold text-navy"
                >
                  Cities
                  <Chevron open={openMenu === "cities"} />
                </button>
                {openMenu === "cities" ? (
                  <div className="grid grid-cols-2 gap-x-3 pb-2 pl-2">
                    {HARYANA_CITIES.map((city) => (
                      <a
                        key={city}
                        href={rooftopSolarPath(city)}
                        className="py-2 text-left text-sm text-muted"
                      >
                        {city}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <a href="/#faq" className="block py-2 text-sm font-semibold text-navy" onClick={() => setMobileOpen(false)}>
                FAQs
              </a>
              <button
                type="button"
                onClick={quote}
                className="mt-2 w-full rounded-full border border-navy px-4 py-2.5 text-sm font-semibold text-navy"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        ) : null}
      </header>
      <div className="h-14 sm:h-16 md:h-[72px]" aria-hidden="true" />
    </>
  );
}
