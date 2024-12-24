// src/routes/authors/create/+page.server.js
import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();

        // Formulardaten in ein Autorenobjekt umwandeln
        const author = {
            name: formData.get("name"),
            age: parseInt(formData.get("age"), 10),
            gender: formData.get("gender"),
        };

        // Autor in der Datenbank erstellen
        const id = await db.createAuthor(author);

        if (id) {
            return { success: true, id };
        } else {
            return { success: false, error: "Author could not be created." };
        }
    },
};
