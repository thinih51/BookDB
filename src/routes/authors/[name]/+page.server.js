// src/routes/authors/[name]/+page.server.js
import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    // params.name = "F.%20Scott%20Fitzgerald" (URL-kodiert)
    const authorName = decodeURIComponent(params.name);

    // getAuthorByName musst du in db.js definieren und exportieren.
    const author = await db.getAuthorByName(authorName);

    if (!author) {
        console.log('No author found with name:', authorName);
        // z. B. auf eine "not-found"-Seite oder zu /books weiterleiten
        throw redirect(302, '/authors-not-found');
    }

    return { author };
}