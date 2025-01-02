import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();

const db = client.db("ShedaDB"); // Select database

//////////////////////////////////////////
// Books
//////////////////////////////////////////

// Get all books
async function getBooks() {
    try {
        const collection = db.collection("books");
        const books = await collection.find({}).toArray();
        return books.map((book) => ({
            ...book,
            _id: book._id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching books:", error.message);
        return [];
    }
}

// Get favorite books
async function getFavoriteBooks() {
    try {
        const collection = db.collection("books");
        const books = await collection.find({ favorite: true }).toArray();
        return books.map((book) => ({
            ...book,
            _id: book._id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching favorite books:", error.message);
        return [];
    }
}

// Get book by ID
async function getBook(id) {
    try {
        const collection = db.collection("books");
        const book = await collection.findOne({ _id: new ObjectId(id) });
        if (book) {
            return { ...book, _id: book._id.toString() };
        }
        console.warn(`No book found with ID: ${id}`);
        return null;
    } catch (error) {
        console.error(`Error fetching book by ID (${id}):`, error.message);
        return null;
    }
}

// Create a new book
async function createBook(book) {
    try {
        const collection = db.collection("books");
        book.cover = book.cover || "/images/placeholder.jpg";
        book.authors = book.authors || [];
        book.favorite = book.favorite || false;

        const result = await collection.insertOne(book);
        return result.insertedId.toString();
    } catch (error) {
        console.error("Error creating book:", error.message);
        return null;
    }
}

// Update a book
async function updateBook(book) {
    try {
        const { _id, ...updateFields } = book;
        const collection = db.collection("books");
        const result = await collection.updateOne(
            { _id: new ObjectId(_id) },
            { $set: updateFields }
        );

        if (result.matchedCount === 0) {
            console.warn(`No book found with ID: ${_id}`);
            return null;
        }
        console.log(`Book with ID ${_id} updated successfully.`);
        return _id;
    } catch (error) {
        console.error("Error updating book:", error.message);
        return null;
    }
}

// Delete book by ID
async function deleteBook(id) {
    try {
        const collection = db.collection("books");
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            console.warn(`No book found with ID: ${id}`);
            return null;
        }
        console.log(`Book with ID ${id} deleted successfully.`);
        return id;
    } catch (error) {
        console.error("Error deleting book:", error.message);
        return null;
    }
}

//////////////////////////////////////////
// Authors
//////////////////////////////////////////

// Get author by name
async function getAuthorByName(authorName) {
    try {
        const collection = db.collection("authors");
        const author = await collection.findOne({ name: authorName });
        if (author) {
            return { ...author, _id: author._id.toString() };
        }
        console.warn(`No author found with name: ${authorName}`);
        return null;
    } catch (error) {
        console.error("Error fetching author by name:", error.message);
        return null;
    }
}

// Create a new author
async function createAuthor(author) {
    try {
        // Validate input
        if (!author.name || typeof author.name !== "string") {
            throw new Error("Author name is required and must be a string.");
        }
        if (!author.age || typeof author.age !== "number") {
            throw new Error("Author age is required and must be a number.");
        }
        if (!["Male", "Female", "Other"].includes(author.gender)) {
            throw new Error("Invalid gender. Must be 'Male', 'Female', or 'Other'.");
        }

        const collection = db.collection("authors");
        const result = await collection.insertOne(author);
        return result.insertedId.toString();
    } catch (error) {
        console.error("Error creating author:", error.message);
        return null;
    }
}

//////////////////////////////////////////
// Export Functions
//////////////////////////////////////////

export default {
    getBooks,
    getFavoriteBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    getAuthorByName,
    createAuthor,
};
