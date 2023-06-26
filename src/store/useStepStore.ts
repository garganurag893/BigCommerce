import { create } from "zustand";

interface StepState {
  currentStep: number;
  handleContinue: () => void;
  handleBack: () => void;
  restart: () => void;
}

export const useStepStore = create<StepState>((set, get) => ({
  currentStep: 0,
  handleContinue: () => {
    const { currentStep } = get();
    set({ currentStep: currentStep + 1 });
  },
  handleBack: () => {
    const { currentStep } = get();
    set({ currentStep: currentStep - 1 });
  },
  restart: () => {
    set({ currentStep: 0 });
  },
}));
