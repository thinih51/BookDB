import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();

        const author = {
            name: formData.get("name"),
            age: parseInt(formData.get("age"), 10),
            gender: formData.get("gender"),
        };

        const id = await db.createAuthor(author);

        if (id) {
            return { success: true, id };
        } else {
            return { success: false, error: "Author could not be created." };
        }
    },
};
