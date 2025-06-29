import { TaskConsecutivePrimes } from "@/lib/tasks/TaskConsecutivePrimes";

describe("TaskConsecutivePrimes", () => {
    it("validates consecutive primes (5 and 7)", () => {
        const task = new TaskConsecutivePrimes();
        task.validate("abc5def7");
        expect(task.isValid).toBe(true);
    });

    it("invalid if only one prime", () => {
        const task = new TaskConsecutivePrimes();
        task.validate("abc5def");
        expect(task.isValid).toBe(false);
    });

    it("invalid if primes are not consecutive", () => {
        const task = new TaskConsecutivePrimes();
        task.validate("abc5def11");
        expect(task.isValid).toBe(false);
    });

    it("validates consecutive primes (11 and 13)", () => {
        const task = new TaskConsecutivePrimes();
        task.validate("11xx13");
        expect(task.isValid).toBe(true);
    });
});
