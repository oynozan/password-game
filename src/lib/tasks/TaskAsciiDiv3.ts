import { Task } from "./Task";

export class TaskAsciiDiv3 extends Task {
    constructor() {
        super("The ASCII value of the first character must be divisible by 3.");
    }

    validate(password: string): void {
        if (password.length === 0) {
            this.isValid = false;
            this.error = "Password cannot be empty.";
            return;
        }

        const ascii = password.charCodeAt(0);

        if (ascii % 3 === 0) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = `The ASCII value (${ascii}) of the first character is not divisible by 3.`;
        }
    }
}
