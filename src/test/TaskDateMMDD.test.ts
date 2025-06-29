import { TaskDateMMDD } from "@/lib/tasks/TaskDateMMDD";

describe("TaskDateMMDD", () => {
    const realDate = Date;

    beforeAll(() => {
        // @ts-expect-error: Mocking global Date for test
        global.Date = class extends Date {
            constructor() {
                super();
                return new realDate("2023-12-25T00:00:00Z");
            }
        };
    });

    afterAll(() => {
        global.Date = realDate;
    });

    it("validates when password includes MMDD", () => {
        const task = new TaskDateMMDD();
        task.validate("mypassword1225");
        expect(task.isValid).toBe(true);
    });

    it("invalid if password does not include MMDD", () => {
        const task = new TaskDateMMDD();
        task.validate("mypassword");
        expect(task.isValid).toBe(false);
    });
}); 