import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SidebarState {
  isOpen: boolean;
  actions: {
    toggleSidebar: () => void;
    setSidebar: (open: boolean) => void;
  };
}

const useSidebarStore = create<SidebarState>()(
  immer((set) => ({
    isOpen: true,

    actions: {
      toggleSidebar: () =>
        set((state) => {
          state.isOpen = !state.isOpen;
        }),
      setSidebar: (open: boolean) =>
        set((state) => {
          state.isOpen = open;
        }),
    },
  }))
);

export const useSidebarOpen = () => useSidebarStore((state) => state.isOpen);
export const useSidebarActions = () =>
  useSidebarStore((state) => state.actions);

export default useSidebarStore;
