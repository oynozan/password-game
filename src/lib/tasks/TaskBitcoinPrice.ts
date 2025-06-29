import { Task } from "./Task";

export class TaskBitcoinPrice extends Task {
    private static price: number | null = null;
    private static loading = false;

    private static async fetchBitcoinPrice(): Promise<number> {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
            {
                cache: "force-cache",
            },
        );
        const data = await res.json();
        return Math.floor(data.bitcoin.usd);
    }

    constructor() {
        super("Include the current price of Bitcoin in USD (rounded down).");
        if (TaskBitcoinPrice.price === null && !TaskBitcoinPrice.loading) {
            TaskBitcoinPrice.loading = true;
            TaskBitcoinPrice.fetchBitcoinPrice().then(price => {
                TaskBitcoinPrice.price = price;
                TaskBitcoinPrice.loading = false;
            });
        }
    }

    validate(password: string): void {
        if (TaskBitcoinPrice.price === null) {
            this.isValid = false;
            this.error = "Fetching Bitcoin price...";
            return;
        }
        if (password.includes(String(TaskBitcoinPrice.price))) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = `Password must include the current Bitcoin price: ${TaskBitcoinPrice.price}`;
        }
    }
}
