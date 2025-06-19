import { create } from "zustand";

const usebuttonStore = create((set) => ({
  welcomingSection: true,
  aboutSection: false,
  showCaseSection: false,
  skillsSection: false,
  contactSection: false,
  showHome: () =>
    set((state) => ({
      welcomingSection: true,
      aboutSection: false,
      showCaseSection: false,
      skillsSection: false,
      contactSection: false,
    })),
  showAbout: () =>
    set((state) => ({
      welcomingSection: false,
      aboutSection: true,
      showCaseSection: false,
      skillsSection: false,
      contactSection: false,
    })),
  showShowCase: () =>
    set((state) => ({
      welcomingSection: false,
      aboutSection: false,
      showCaseSection: true,
      skillsSection: false,
      contactSection: false,
    })),
  showSkills: () =>
    set((state) => ({
      welcomingSection: false,
      aboutSection: false,
      showCaseSection: false,
      skillsSection: true,
      contactSection: false,
    })),
  showContact: () =>
    set((state) => ({
      welcomingSection: false,
      aboutSection: false,
      showCaseSection: false,
      skillsSection: false,
      contactSection: true,
    })),
}));

export default usebuttonStore;
