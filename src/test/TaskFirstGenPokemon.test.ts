import { TaskFirstGenPokemon } from "@/lib/tasks/TaskFirstGenPokemon";

describe("TaskFirstGenPokemon", () => {
    beforeEach(() => {
        // @ts-expect-error: Accessing private static for test
        TaskFirstGenPokemon.pokemon = ["bulbasaur", "charmander", "squirtle"];
    });

    it("validates when password includes a first gen pokemon", () => {
        const task = new TaskFirstGenPokemon();
        task.validate("mypasswordbulbasaur");
        expect(task.isValid).toBe(true);
    });

    it("invalid if password does not include a first gen pokemon", () => {
        const task = new TaskFirstGenPokemon();
        task.validate("mypassword");
        expect(task.isValid).toBe(false);
    });
}); 