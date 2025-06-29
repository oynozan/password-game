import { Task } from "./Task";

export class TaskSumTo90 extends Task {
    constructor() {
        super("All single-digit numbers in the password must sum up to 90.");
    }

    validate(password: string): void {
        // Find all single digits in the string
        const digits = password.match(/\d/g);
        const sum = digits ? digits.map(Number).reduce((a, b) => a + b, 0) : 0;
        if (sum === 90) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = "All single-digit numbers in the password must sum up to 90.";
        }
    }
} 