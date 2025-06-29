"use client";

import type React from "react";

import { Task } from "../lib/tasks/Task";
import { usePasswordStore } from "../lib/store";
import { TaskList } from "../components/TaskList";
import { PasswordInput } from "../components/PasswordInput";

export default function HomePage() {
    const { password, setPassword, taskManager, revealedCount, validateTasks, revealNextTask } =
        usePasswordStore();

    const revealedTasks: Task[] = taskManager.getRevealedTasks(revealedCount);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        validateTasks();

        // Reveal all tasks that are valid in sequence
        let currentCount = revealedCount;
        let allValid = true;

        while (allValid && currentCount < taskManager.getTasks().length) {
            const tasksToCheck = taskManager.getRevealedTasks(currentCount);
            allValid = tasksToCheck.every(task => task.isValid);

            if (allValid && currentCount < taskManager.getTasks().length) {
                revealNextTask();
                currentCount++;
            }
        }
    };

    return (
        <main className="text-white max-w-md mx-auto my-8">
            <h1 className="text-2xl font-bold text-center mb-2">The Password Game</h1>
            <p className="text-center mb-4">Please log in, if you can :)</p>
            <PasswordInput
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
            />
            <TaskList tasks={revealedTasks} />
        </main>
    );
}
