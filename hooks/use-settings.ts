import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  board: string;
  setBoard: (board: string) => void;
  year: string;
  setYear: (year: string) => void;
  examType: string;
  setExamType: (examType: string) => void;
  showExamType: boolean;
  setShowExamType: (show: boolean) => void;
  showYear: boolean;
  setShowYear: (show: boolean) => void;
  showBoard: boolean;
  setShowBoard: (show: boolean) => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      board: '',
      setBoard: (board) => set({ board }),
      year: '',
      setYear: (year) => set({ year }),
      examType: '',
      setExamType: (examType) => set({ examType }),
      showExamType: true,
      setShowExamType: (show) => set({ showExamType: show }),
      showYear: true,
      setShowYear: (show) => set({ showYear: show }),
      showBoard: true,
      setShowBoard: (show) => set({ showBoard: show }),
    }),
    {
      name: 'settings-storage',
    }
  )
);