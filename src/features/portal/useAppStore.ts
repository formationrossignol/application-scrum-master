"use client";
import { create } from "zustand";

type Favorite = { contentType: string; contentId: string };
type HistoryItem = { type: string; slug: string; at: string };

type State = {
  favorites: Favorite[];
  history: HistoryItem[];
  toggleFavorite: (fav: Favorite) => void;
  pushHistory: (item: Omit<HistoryItem, "at">) => void;
};

export const useAppStore = create<State>((set, get) => ({
  favorites: [],
  history: [],
  toggleFavorite: (fav) => {
    const exists = get().favorites.some((f) => f.contentType === fav.contentType && f.contentId === fav.contentId);
    set({ favorites: exists ? get().favorites.filter((f) => !(f.contentType === fav.contentType && f.contentId === fav.contentId)) : [...get().favorites, fav] });
  },
  pushHistory: (item) => set({ history: [{ ...item, at: new Date().toISOString() }, ...get().history].slice(0, 12) })
}));
