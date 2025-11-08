import { useCallback } from "react";

interface HistoryItem {
  id: string;
  type: string;
  command: string;
  timestamp: string;
}

export const useHistoryTracking = () => {
  const addToHistory = useCallback((type: string, command: string) => {
    const historyItem: HistoryItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      command,
      timestamp: new Date().toISOString(),
    };

    const savedHistory = localStorage.getItem("horizonsHistory");
    const history: HistoryItem[] = savedHistory ? JSON.parse(savedHistory) : [];
    
    // Add new item to the beginning and limit to 50 items
    const updatedHistory = [historyItem, ...history].slice(0, 50);
    
    localStorage.setItem("horizonsHistory", JSON.stringify(updatedHistory));
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem("horizonsHistory");
  }, []);

  const getHistory = useCallback((): HistoryItem[] => {
    const savedHistory = localStorage.getItem("horizonsHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  }, []);

  return {
    addToHistory,
    clearHistory,
    getHistory,
  };
};
