import { TaskRandomEmoji } from "@/lib/tasks/TaskRandomEmoji";

describe("TaskRandomEmoji", () => {
    beforeEach(() => {
        // @ts-expect-error: Accessing private static for test
        TaskRandomEmoji.selectedEmoji = "🐱";
    });

    it("validates when password ends with the emoji", () => {
        const task = new TaskRandomEmoji();
        task.validate("mypassword🐱");
        expect(task.isValid).toBe(true);
    });

    it("invalid if password does not end with the emoji", () => {
        const task = new TaskRandomEmoji();
        task.validate("mypassword");
        expect(task.isValid).toBe(false);
    });
}); 