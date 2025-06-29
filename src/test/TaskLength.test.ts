import { TaskLength } from "@/lib/tasks/TaskLength";

describe("TaskLength", () => {
    it("validates when password is at least 5 characters", () => {
        const task = new TaskLength();
        task.validate("12345");
        expect(task.isValid).toBe(true);
    });

    it("invalid if password is less than 5 characters", () => {
        const task = new TaskLength();
        task.validate("1234");
        expect(task.isValid).toBe(false);
    });
}); 