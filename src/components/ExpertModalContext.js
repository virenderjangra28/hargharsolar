"use client";

import { createContext, useContext, useEffect, useState } from "react";
import ExpertPopup from "./ExpertPopup";

const ExpertModalContext = createContext(null);

export function ExpertModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    if (window.location.hash === "#expert") {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") closeModal();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <ExpertModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      <ExpertPopup open={open} onClose={closeModal} />
    </ExpertModalContext.Provider>
  );
}

export function useExpertModal() {
  const context = useContext(ExpertModalContext);
  if (!context) {
    throw new Error("useExpertModal must be used within ExpertModalProvider");
  }
  return context;
}
