import React from "react";
import { Task } from "../lib/tasks/Task";

type TaskListProps = {
    tasks: Task[];
};

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
    <div>
        {tasks.map((task, idx) => (
            <div
                key={idx}
                style={{
                    background: task.isValid
                        ? "#e0ffe0"
                        : task.error
                        ? "#ffe0e0"
                        : "#f0f0f0",
                    color: task.isValid ? "#222" : task.error ? "#b00" : "#222",
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 12,
                    border: task.isValid
                        ? "1px solid #0c0"
                        : task.error
                        ? "1px solid #b00"
                        : "1px solid #ccc",
                }}
            >
                {task.description}
                {!task.isValid && task.error && (
                    <div style={{ fontSize: 13, marginTop: 4 }}>{task.error}</div>
                )}
            </div>
        ))}
    </div>
); 