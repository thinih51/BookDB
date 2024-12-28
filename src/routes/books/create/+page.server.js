import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {

        const formData = await request.formData();

        const book = {
            title: formData.get("title"),
            year: parseInt(formData.get("year"), 10),
            pages: parseInt(formData.get("pages"), 10),
            authors: formData.get("authors").split(",").map((author) => author.trim()),
            cover: formData.get("cover") || "/images/placeholder.jpg",
            favorite: formData.get("favorite") === "on",
        };

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