import { create } from "zustand";

interface AudioState {
  isPlaying: boolean;
  setPlaying: (playing: boolean) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  isPlaying: false,
  setPlaying: (playing: boolean) => set({ isPlaying: playing }),
}));
