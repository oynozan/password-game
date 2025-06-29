import { Task } from "./Task";

export class TaskLength extends Task {
    constructor() {
        super("At least 5 characters");
    }

    validate(password: string): void {
        if (password.length >= 5) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = "Password must be at least 5 characters.";
        }
    }
}
