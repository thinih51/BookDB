import db from "$lib/db.js";

export async function load() {
    return {
        books: await db.getBooks()
    }
}

export const actions = {
    addToFavorite: async ({ request }) => {
        let data = await request.formData();
        let id = data.get("id");
        let book = {
            _id: id,
            favorite: true
        };
        await db.updateBook(book);
    },
    removeFromFavorite: async ({ request }) => {
        let data = await request.formData();
        let id = data.get("id");
        let book = {
            _id: id,
            favorite: false
        };
        await db.updateBook(book);
    }
}