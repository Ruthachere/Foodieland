'use client'
// context/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface ThemeContextType {
  counter: number;
  increment: () => void;
  decrement: () => void;

}

// Create context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Create provider component
export const ThemeProvider = ({ children }: {children: ReactNode;}) => {
  const [counter, setCounter] = useState<number>(0); // Default theme

  // Toggle increment and decrement
  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <ThemeContext.Provider value={{ counter, increment, decrement}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context
export const useCounter = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
