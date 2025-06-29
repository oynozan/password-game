import { Task } from "./Task";

export class TaskDateMMDD extends Task {
    constructor() {
        super("Must contain today's date in MMDD format.");
    }

    validate(password: string): void {
        const now = new Date();
        const mm = String(now.getMonth() + 1).padStart(2, "0");
        const dd = String(now.getDate()).padStart(2, "0");
        const mmdd = mm + dd;

        if (password.includes(mmdd)) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = `Password must contain today's date`;
        }
    }
}
