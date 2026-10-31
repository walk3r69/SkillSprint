import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [completedTasks, setCompletedTasks] = useState([1, 2]);

  function toggleTask(taskId) {
    setCompletedTasks((currentTasks) =>
      currentTasks.includes(taskId)
        ? currentTasks.filter((id) => id !== taskId)
        : [...currentTasks, taskId],
    );
  }

  const value = useMemo(
    () => ({
      completedTasks,
      completedCount: completedTasks.length,
      toggleTask,
    }),
    [completedTasks],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de AppProvider.');
  }

  return context;
}
