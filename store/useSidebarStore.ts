import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SidebarState {
  isOpen: boolean;
  isMobileOpen: boolean;
  actions: {
    toggleSidebar: () => void;
    setSidebar: (open: boolean) => void;
    toggleMobileSidebar: () => void;
    setMobileSidebar: (open: boolean) => void;
  };
}

const useSidebarStore = create<SidebarState>()(
  immer((set) => ({
    isOpen: true,
    isMobileOpen: false,

    actions: {
      toggleSidebar: () =>
        set((state) => {
          state.isOpen = !state.isOpen;
        }),

      setSidebar: (open: boolean) =>
        set((state) => {
          state.isOpen = open;
        }),

      toggleMobileSidebar: () =>
        set((state) => {
          state.isMobileOpen = !state.isMobileOpen;
        }),

      setMobileSidebar: (open: boolean) =>
        set((state) => {
          state.isMobileOpen = open;
        }),
    },
  }))
);

export const useSidebarOpen = () => useSidebarStore((state) => state.isOpen);

export const useMobileSidebarOpen = () =>
  useSidebarStore((state) => state.isMobileOpen);

export const useSidebarActions = () =>
  useSidebarStore((state) => state.actions);

export default useSidebarStore;
