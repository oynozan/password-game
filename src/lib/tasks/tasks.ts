import { Task } from "./Task";
import { TaskLength } from "./TaskLength";
import { TaskSumTo90 } from "./TaskSumTo90";
import { TaskDateMMDD } from "./TaskDateMMDD";
import { TaskAsciiDiv3 } from "./TaskAsciiDiv3";
import { TaskBrowserName } from "./TaskBrowserName";
import { TaskRandomEmoji } from "./TaskRandomEmoji";
import { TaskBitcoinPrice } from "./TaskBitcoinPrice";
import { TaskColorNonEnglish } from "./TaskColorNonEnglish";
import { TaskFirstGenPokemon } from "./TaskFirstGenPokemon";
import { TaskConsecutivePrimes } from "./TaskConsecutivePrimes";

export class TaskManager {
    private tasks: Task[];

    constructor() {
        this.tasks = [
            new TaskLength(),
            new TaskAsciiDiv3(),
            new TaskDateMMDD(),
            new TaskSumTo90(),
            new TaskConsecutivePrimes(),
            new TaskRandomEmoji(),
            new TaskColorNonEnglish(),
            new TaskFirstGenPokemon(),
            new TaskBitcoinPrice(),
            new TaskBrowserName(),
        ];
    }

    public validate(password: string): void {
        this.tasks.forEach((task: Task) => task.validate(password));
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public getRevealedTasks(count: number): Task[] {
        return this.tasks.slice(0, count);
    }
}
