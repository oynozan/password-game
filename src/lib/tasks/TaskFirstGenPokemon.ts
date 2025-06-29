import { Task } from "./Task";

export class TaskFirstGenPokemon extends Task {
    private static pokemon: string[] | null = null;
    private static loading = false;

    private static async fetchFirstGenPokemon(): Promise<string[]> {
        const res = await fetch("https://pokeapi.co/api/v2/generation/1");
        const data = await res.json();
        return data.pokemon_species.map((p: { name: string }) => p.name.toLowerCase());
    }

    constructor() {
        super("Include a Pokémon from the first generation.");
        if (!TaskFirstGenPokemon.pokemon && !TaskFirstGenPokemon.loading) {
            TaskFirstGenPokemon.loading = true;
            TaskFirstGenPokemon.fetchFirstGenPokemon().then(list => {
                TaskFirstGenPokemon.pokemon = list;
                TaskFirstGenPokemon.loading = false;
            });
        }
    }

    validate(password: string): void {
        if (!TaskFirstGenPokemon.pokemon) {
            this.isValid = false;
            this.error = "Loading Pokémon list...";
            return;
        }
        const lower = password.toLowerCase();
        const found = TaskFirstGenPokemon.pokemon.some(p => lower.includes(p));
        if (found) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = "Password must include a first generation Pokémon name.";
        }
    }
}
