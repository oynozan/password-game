import { Task } from "./Task";

type Brand = { brand: string };

declare global {
    interface Navigator {
        userAgentData?: { brands: Brand[] };
    }
}

function getBrowserName(): string | null {
    if (typeof navigator !== "undefined") {
        // Try userAgentData
        if (
            typeof navigator.userAgentData === "object" &&
            navigator.userAgentData !== null &&
            Array.isArray(navigator.userAgentData.brands)
        ) {
            const brands = navigator.userAgentData.brands.map((b: Brand) => b.brand.toLowerCase());
            if (brands.some((b: string) => b.includes("chrome"))) return "chrome";
            if (brands.some((b: string) => b.includes("edge"))) return "edge";
            if (brands.some((b: string) => b.includes("opera"))) return "opera";
            if (brands.some((b: string) => b.includes("firefox"))) return "firefox";
            if (brands.some((b: string) => b.includes("safari"))) return "safari";
        }

        // Fallback to userAgent string
        const ua = navigator.userAgent.toLowerCase();

        if (ua.includes("edg")) return "edge";
        if (ua.includes("opr") || ua.includes("opera")) return "opera";
        if (ua.includes("chrome")) return "chrome";
        if (ua.includes("firefox")) return "firefox";
        if (ua.includes("safari")) return "safari";
    }
    return null;
}

export class TaskBrowserName extends Task {
    private static browser: string | null = getBrowserName();

    constructor() {
        super("You must include your browser's name in the password.");
    }

    validate(password: string): void {
        const browser = TaskBrowserName.browser;
        if (!browser) {
            this.isValid = false;
            this.error = "Could not detect browser name.";
            return;
        }
        if (password.toLowerCase().includes(browser)) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = `Password must include your browser's name.`;
        }
    }
} 