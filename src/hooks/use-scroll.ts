"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Hook to track if the window has been scrolled past a certain threshold.
 * Uses useSyncExternalStore to avoid cascading renders and ensure SSR compatibility.
 */
export function useScroll(threshold: number) {
  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener("scroll", onStoreChange, { passive: true });
    return () => window.removeEventListener("scroll", onStoreChange);
  }, []);

  const getSnapshot = useCallback(() => {
    return window.scrollY > threshold;
  }, [threshold]);

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
