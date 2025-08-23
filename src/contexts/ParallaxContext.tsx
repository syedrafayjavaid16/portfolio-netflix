'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ParallaxContextType {
  parallaxEnabled: boolean;
  setParallaxEnabled: (enabled: boolean) => void;
}

const ParallaxContext = createContext<ParallaxContextType | undefined>(undefined);

export const useParallax = () => {
  const context = useContext(ParallaxContext);
  if (context === undefined) {
    throw new Error('useParallax must be used within a ParallaxProvider');
  }
  return context;
};

interface ParallaxProviderProps {
  children: ReactNode;
}

export const ParallaxProvider = ({ children }: ParallaxProviderProps) => {
  const [parallaxEnabled, setParallaxEnabled] = useState(true);

  return (
    <ParallaxContext.Provider value={{ parallaxEnabled, setParallaxEnabled }}>
      {children}
    </ParallaxContext.Provider>
  );
};

