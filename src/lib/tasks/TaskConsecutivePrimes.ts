import { Task } from "./Task";

export class TaskConsecutivePrimes extends Task {
    constructor() {
        super("Include two consecutive prime numbers.");
    }

    validate(password: string): void {
        if (TaskConsecutivePrimes.hasConsecutivePrimes(password)) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = "Password must include two consecutive prime numbers";
        }
    }

    private static isPrime(n: number): boolean {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    private static nextPrime(n: number): number {
        let candidate = n + 1;
        while (true) {
            if (this.isPrime(candidate)) return candidate;
            candidate++;
        }
    }

    private static hasConsecutivePrimes(str: string): boolean {
        // Find all numbers in the string
        const numbers = str.match(/\d+/g);
        if (!numbers) return false;

        // Get all unique primes from the numbers
        const primes: number[] = [];
        for (const numStr of numbers) {
            const n = parseInt(numStr);
            if (this.isPrime(n) && !primes.includes(n)) primes.push(n);
        }

        primes.sort((a, b) => a - b);

        // Check for any two consecutive primes in the list of all primes
        for (let i = 0; i < primes.length - 1; i++) {
            if (this.nextPrime(primes[i]) === primes[i + 1]) {
                return true;
            }
        }

        return false;
    }
}
