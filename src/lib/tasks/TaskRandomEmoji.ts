import { Task } from "./Task";

export class TaskRandomEmoji extends Task {
    private static readonly EMOJIS = ["😼", "😺", "😸", "😹", "😻", "😽", "🙀", "😿", "😾", "😺",
        "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔",
        "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺", "🐻‍❄️", "🐨", "🐯", "🦁", "🐮", "🐷",
        "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺", "🐻‍❄️", "🐨", "🐯",
    ];

    private static readonly selectedEmoji =
        TaskRandomEmoji.EMOJIS[Math.floor(Math.random() * TaskRandomEmoji.EMOJIS.length)];

    constructor() {
        super(`The password must end with ${TaskRandomEmoji.selectedEmoji}`);
    }

    validate(password: string): void {
        if (password.endsWith(TaskRandomEmoji.selectedEmoji)) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = `Password must end with ${TaskRandomEmoji.selectedEmoji}`;
        }
    }
}
