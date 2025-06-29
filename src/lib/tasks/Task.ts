export abstract class Task {
    description: string;
    isValid: boolean = false;
    error: string = "";

    constructor(description: string) {
        this.description = description;
    }

    abstract validate(password: string): void;
}
