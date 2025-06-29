import { TaskSumTo90 } from "@/lib/tasks/TaskSumTo90";

describe("TaskSumTo90", () => {
    it("validates when single digits sum to 90", () => {
        const task = new TaskSumTo90();
        task.validate("9999999999"); // 10 nines = 90
        expect(task.isValid).toBe(true);
    });

    it("invalid if single digits do not sum to 90", () => {
        const task = new TaskSumTo90();
        task.validate("8888888888"); // 10 eights = 80
        expect(task.isValid).toBe(false);
    });

    it("ignores multi-digit numbers, only single digits count", () => {
        const task = new TaskSumTo90();
        task.validate("45abc45"); // 4+5+4+5 = 18
        expect(task.isValid).toBe(false);
    });

    it("invalid if no digits", () => {
        const task = new TaskSumTo90();
        task.validate("password");
        expect(task.isValid).toBe(false);
    });

    it("validates with digits separated by letters", () => {
        const task = new TaskSumTo90();
        task.validate("9a9b9c9d9e9f9g9h9i9j"); // 10 nines = 90
        expect(task.isValid).toBe(true);
    });
}); 