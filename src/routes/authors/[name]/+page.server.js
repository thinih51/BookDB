import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const authorName = decodeURIComponent(params.name);
    
    const author = await db.getAuthorByName(authorName);

    if (!author) {
        console.log('No author found with name:', authorName);
        throw redirect(302, '/authors-not-found');
    }

    return { author };
}