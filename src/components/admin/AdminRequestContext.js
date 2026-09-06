"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { REQUESTS, getRequestStats } from "./requestData";

const AdminRequestContext = createContext(null);

export function AdminRequestProvider({ children }) {
  const [requests, setRequests] = useState(REQUESTS);

  function setStatus(id, status) {
    setRequests((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  }

  const stats = useMemo(() => getRequestStats(requests), [requests]);

  return (
    <AdminRequestContext.Provider value={{ requests, setStatus, stats }}>
      {children}
    </AdminRequestContext.Provider>
  );
}

export function useAdminRequests() {
  const context = useContext(AdminRequestContext);
  if (!context) {
    throw new Error("useAdminRequests must be used within AdminRequestProvider");
  }
  return context;
}
