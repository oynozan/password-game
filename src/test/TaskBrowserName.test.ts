import { TaskBrowserName } from "@/lib/tasks/TaskBrowserName";

describe("TaskBrowserName", () => {
    beforeAll(() => {
        // @ts-expect-error: override for test
        TaskBrowserName.browser = "chrome";
    });

    it("validates when password includes a browser name (chrome)", () => {
        const task = new TaskBrowserName();
        task.validate("mychrome123");
        expect(task.isValid).toBe(true);
    });

    it("validates when password includes a browser name (firefox)", () => {
        const task = new TaskBrowserName();
        task.validate("firefoxrocks");
        expect(task.isValid).toBe(false);
    });

    it("invalid if password does not include a browser name", () => {
        const task = new TaskBrowserName();
        task.validate("mypassword");
        expect(task.isValid).toBe(false);
        expect(task.error).toBe("Password must include your browser's name.");
    });
}); 