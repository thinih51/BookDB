import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    book: await db.getBook(params.book_id),
  };
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();

    let book = {
      _id: data.get("_id"), // Buch-ID
      title: data.get("title"), // Aktualisierter Titel
      year: parseInt(data.get("year"), 10), // Aktualisiertes Jahr
      pages: parseInt(data.get("pages"), 10), // Aktualisierte Seitenanzahl
      authors: data.get("authors").split(",").map((author) => author.trim()), // Aktualisierte Autorenliste
      cover: data.get("cover"), // Aktualisiertes Cover
    };

    await db.updateBook(book);
    return { success: true };
  },
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteBook(data.get("id"));
    throw redirect(303, "/books");
  },
};