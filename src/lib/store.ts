import { create } from "zustand";
import { TaskManager } from "./tasks/tasks";

interface StoreState {
    password: string;
    taskManager: TaskManager;
    revealedCount: number;
    setPassword: (password: string) => void;
    validateTasks: () => void;
    revealNextTask: () => void;
}

export const usePasswordStore = create<StoreState>((set, get) => ({
    password: "",
    taskManager: new TaskManager(),
    revealedCount: 1,
    setPassword: (password: string) => set({ password }),
    validateTasks: () => {
        get().taskManager.validate(get().password);
        set({}); // trigger update
    },
    revealNextTask: () => set(state => ({ revealedCount: state.revealedCount + 1 })),
}));
