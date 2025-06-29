import { TaskAsciiDiv3 } from "@/lib/tasks/TaskAsciiDiv3";

describe("TaskAsciiDiv3", () => {
    it("validates when first char ASCII is divisible by 3", () => {
        const task = new TaskAsciiDiv3();
        task.validate("Zpassword");
        expect(task.isValid).toBe(true);
    });

    it("invalid if first char ASCII is not divisible by 3", () => {
        const task = new TaskAsciiDiv3();
        task.validate("Apassword");
        expect(task.isValid).toBe(false);
    });
}); 