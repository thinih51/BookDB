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
      _id: data.get("_id"),
      title: data.get("title"),
      year: parseInt(data.get("year"), 10),
      pages: parseInt(data.get("pages"), 10),
      authors: data.get("authors").split(",").map((author) => author.trim()),
      cover: data.get("cover"),
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