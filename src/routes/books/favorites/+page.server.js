import db from "$lib/db.js";

export async function load() {
    return {
        books: await db.getFavoriteBooks()
    }
}

export const actions = {
    removeFromFavorite: async ({ request }) => {
        let data = await request.formData();
        let id = data.get("id");
        let book = {
            _id: id,
            favorite: false
        }
        await db.updateBook(book);;
    }
}