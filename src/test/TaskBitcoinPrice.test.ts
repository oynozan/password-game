import { TaskBitcoinPrice } from "@/lib/tasks/TaskBitcoinPrice";

describe("TaskBitcoinPrice", () => {
    beforeEach(() => {
        // @ts-expect-error: Accessing private static for test
        TaskBitcoinPrice.price = 12345;
    });

    it("validates when password includes the price", () => {
        const task = new TaskBitcoinPrice();
        task.validate("mypassword12345");
        expect(task.isValid).toBe(true);
    });

    it("invalid if password does not include the price", () => {
        const task = new TaskBitcoinPrice();
        task.validate("mypassword");
        expect(task.isValid).toBe(false);
    });
}); 