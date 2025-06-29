import { Task } from "./Task";

const NON_ENGLISH_COLORS = [
    "rojo", "azul", "verde", "amarillo", "negro", "blanco", "gris", "morado", "naranja", "rosa", "marrón",
    "rouge", "bleu", "vert", "jaune", "noir", "blanc", "gris", "violet", "orange", "rose", "marron",
    "rot", "blau", "grün", "gelb", "schwarz", "weiß", "grau", "lila", "orange", "rosa", "braun",
    "rosso", "blu", "verde", "giallo", "nero", "bianco", "grigio", "viola", "arancione", "rosa", "marrone"
];

export class TaskColorNonEnglish extends Task {
    constructor() {
        super("Include a color name, but not in English.");
    }

    validate(password: string): void {
        const lower = password.toLowerCase();
        const found = NON_ENGLISH_COLORS.some(color => lower.includes(color));

        if (found) {
            this.isValid = true;
            this.error = "";
        } else {
            this.isValid = false;
            this.error = "Password must include a color name in a non-English language.";
        }
    }
} 