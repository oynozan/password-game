import { TaskColorNonEnglish } from "@/lib/tasks/TaskColorNonEnglish";

describe("TaskColorNonEnglish", () => {
    it("validates Spanish color", () => {
        const task = new TaskColorNonEnglish();
        task.validate("mypasswordrojo");
        expect(task.isValid).toBe(true);
    });

    it("invalid if no color", () => {
        const task = new TaskColorNonEnglish();
        task.validate("mypassword");
        expect(task.isValid).toBe(false);
    });
});
