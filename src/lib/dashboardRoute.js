const DASHBOARD_ROUTES = {
  1: "/admin/dashboard",
  2: "/vendor/dashboard",
  3: "/consumer/dashboard",
};

export function getDashboardRoute(role) {
  return DASHBOARD_ROUTES[String(role)] ?? null;
}
