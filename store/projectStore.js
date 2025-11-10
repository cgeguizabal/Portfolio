import { create } from "zustand";

const useShowCaseStore = create((set) => ({
  propertyPulse: false,
  loopStudio: false,
  clipBoard: false,
  cartList: false,
  medcare: false,
  restFulApi: false,
  spotify: false,
  sciQuest: false,
  timelessPages: false,
  ejg: false,

  showPropertyPulse: () => set((state) => ({ propertyPulse: true })),
  showLoopStudio: () => set((state) => ({ loopStudio: true })),
  showClipBoard: () => set((state) => ({ clipBoard: true })),
  showCartList: () => set((state) => ({ cartList: true })),
  showMedcare: () => set((state) => ({ medcare: true })),
  showRestFulApi: () => set((state) => ({ restFulApi: true })),
  showSpotify: () => set((state) => ({ spotify: true })),
  showSciQuest: () => set((state) => ({ sciQuest: true })),
  showTimelessPages: () => set((state) => ({ timelessPages: true })),
  showEjg: () => set((state) => ({ ejg: true })),
  closeAll: () =>
    set((state) => ({
      propertyPulse: false,
      loopStudio: false,
      clipBoard: false,
      cartList: false,
      medcare: false,
      restFulApi: false,
      spotify: false,
      sciQuest: false,
      timelessPages: false,
      ejg: false,
    })),
}));

export default useShowCaseStore;
