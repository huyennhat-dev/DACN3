// src/context/AudioContext.tsx
import React, { createContext, useContext, useRef, ReactNode, RefObject } from 'react';

interface AudioContextProps {
  audioRef: RefObject<HTMLAudioElement>;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <AudioContext.Provider value={{ audioRef }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextProps => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
