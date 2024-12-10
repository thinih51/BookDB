import db from "$lib/db.js";

export async function load({ params }) {
    return {
        book: await db.getBook(params.book_id),
    };
}