import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {

        // Formulardaten abrufen
        const formData = await request.formData();

        // Daten aus dem Formular extrahieren
        const book = {
            title: formData.get("title"), // Titel des Buches
            year: parseInt(formData.get("year"), 10), // Jahr als Zahl
            pages: parseInt(formData.get("pages"), 10), // Seitenanzahl als Zahl
            authors: formData.get("authors").split(",").map((author) => author.trim()), // Autoren als Liste
            cover: formData.get("cover") || "/images/placeholder.jpg", // Standardbild, falls kein Cover angegeben
            favorite: formData.get("favorite") === "on", // Checkbox: true, wenn aktiviert
        };

        // Buch in der Datenbank erstellen
        const id = await db.createBook(book);

        if (id) {
            return {
                success: true,
                id,
            };
        } else {
            return {
                success: false,
                error: 'Book could not be created.',
            };
        }
    },
}