'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface SettingsContextType {
  board: string;
  setBoard: (board: string) => void;
  year: string;
  setYear: (year: string) => void;
  examType: string;
  setExamType: (examType: string) => void;
  showBoard: boolean;
  setShowBoard: (show: boolean) => void;
  showYear: boolean;
  setShowYear: (show: boolean) => void;
  showExamType: boolean;
  setShowExamType: (show: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  board: 'dhaka',
  setBoard: () => {},
  year: '2023',
  setYear: () => {},
  examType: 'ssc',
  setExamType: () => {},
  showBoard: true,
  setShowBoard: () => {},
  showYear: true,
  setShowYear: () => {},
  showExamType: true,
  setShowExamType: () => {},
});

export function useSettings() {
  return useContext(SettingsContext);
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [board, setBoard] = useState('dhaka');
  const [year, setYear] = useState('2023');
  const [examType, setExamType] = useState('ssc');
  const [showBoard, setShowBoard] = useState(true);
  const [showYear, setShowYear] = useState(true);
  const [showExamType, setShowExamType] = useState(true);

  // Initialize settings from localStorage on client side
  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      const savedBoard = localStorage.getItem('board');
      const savedYear = localStorage.getItem('year');
      const savedExamType = localStorage.getItem('examType');
      const savedShowBoard = localStorage.getItem('showBoard');
      const savedShowYear = localStorage.getItem('showYear');
      const savedShowExamType = localStorage.getItem('showExamType');

      if (savedBoard) setBoard(savedBoard);
      if (savedYear) setYear(savedYear);
      if (savedExamType) setExamType(savedExamType);
      if (savedShowBoard !== null) setShowBoard(savedShowBoard === 'true');
      if (savedShowYear !== null) setShowYear(savedShowYear === 'true');
      if (savedShowExamType !== null) setShowExamType(savedShowExamType === 'true');
    }
  }, []);

  // Save settings to localStorage when changed
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('board', board);
      localStorage.setItem('year', year);
      localStorage.setItem('examType', examType);
      localStorage.setItem('showBoard', String(showBoard));
      localStorage.setItem('showYear', String(showYear));
      localStorage.setItem('showExamType', String(showExamType));
    }
  }, [board, year, examType, showBoard, showYear, showExamType, isClient]);

  return (
    <SettingsContext.Provider
      value={{
        board,
        setBoard,
        year,
        setYear,
        examType,
        setExamType,
        showBoard,
        setShowBoard,
        showYear,
        setShowYear,
        showExamType,
        setShowExamType,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}