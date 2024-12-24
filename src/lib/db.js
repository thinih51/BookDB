import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("ShedaDB"); // Select database

//////////////////////////////////////////
// Books
//////////////////////////////////////////

// Get all books
async function getBooks() {
    let books = [];
    try {
        const collection = db.collection("books");

        // You can specify a query/filter here
        const query = {};

        // Get all objects that match the query
        books = await collection.find(query).toArray();
        books.forEach((book) => {
            book._id = book._id.toString(); // Convert ObjectId to String
        });
    } catch (error) {
        console.log(error);
        // TODO: error handling
    }
    return books;
}

// Get favorite books
async function getFavoriteBooks() {
    let books = [];
    try {
        const collection = db.collection("books");

        // Filter for favorite books
        const query = { favorite: true };

        // Get all objects that match the query
        books = await collection.find(query).toArray();
        books.forEach((book) => {
            book._id = book._id.toString(); // Convert ObjectId to String
        });
    } catch (error) {
        console.log(error);
        // TODO: error handling
    }
    return books;
}

// Get book by id
async function getBook(id) {
    let book = null;
    try {
        const collection = db.collection("books");
        const query = { _id: new ObjectId(id) }; // Filter by id
        book = await collection.findOne(query);

        if (!book) {
            console.log("No book with id " + id);
            // TODO: error handling
        } else {
            book._id = book._id.toString(); // Convert ObjectId to String
        }
    } catch (error) {
        // TODO: error handling
        console.log(error.message);
    }
    return book;
}

// Create a new book
async function createBook(book) {
    if (!book.cover) {
        book.cover = "/images/placeholder.jpg";
    }
    // Nur wenn authors nicht existiert, auf leeres Array setzen
    if (!book.authors) {
        book.authors = [];
    }
    // Nur wenn favorite nicht definiert ist, auf false setzen
    if (!("favorite" in book)) {
        book.favorite = false;
    }

    try {
        const collection = db.collection("books");
        const result = await collection.insertOne(book);
        return result.insertedId.toString();
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Update a book
async function updateBook(book) {
    try {
        let id = book._id;
        delete book._id; // Remove the _id from the object because the _id cannot be updated
        const collection = db.collection("books");
        const query = { _id: new ObjectId(id) }; // Filter by id
        const result = await collection.updateOne(query, { $set: book });

        if (result.matchedCount === 0) {
            console.log("No book with id " + id);
            // TODO: error handling
        } else {
            console.log("Book with id " + id + " has been updated.");
            return id;
        }
    } catch (error) {
        // TODO: error handling
        console.log(error.message);
    }
    return null;
}

// Delete book by id
async function deleteBook(id) {
    try {
        const collection = db.collection("books");
        const query = { _id: new ObjectId(id) }; // Filter by id
        const result = await collection.deleteOne(query);

        if (result.deletedCount === 0) {
            console.log("No book with id " + id);
        } else {
            console.log("Book with id " + id + " has been successfully deleted.");
            return id;
        }
    } catch (error) {
        // TODO: error handling
        console.log(error.message);
    }
    return null;
}

async function getAuthorByName(authorName) {
    try {
        const collection = db.collection("authors");
        const author = await collection.findOne({ name: authorName });
        if (author) {
            author._id = author._id.toString();
            return author;
        } else {
            console.log("No author with name " + authorName);
        }
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

async function createAuthor(author) {
    try {
        // Validierung: Prüfe, ob alle erforderlichen Felder vorhanden sind
        if (!author.name || typeof author.name !== "string") {
            throw new Error("Author name is required and must be a string.");
        }
        if (!author.age || typeof author.age !== "number") {
            throw new Error("Author age is required and must be a number.");
        }
        if (!author.gender || !["Male", "Female", "Other"].includes(author.gender)) {
            throw new Error("Author gender is required and must be 'Male', 'Female', or 'Other'.");
        }

        // Collection "authors" auswählen
        const collection = db.collection("authors");

        // Autor in der Datenbank speichern
        const result = await collection.insertOne(author);

        // Erfolgreich? Die ID des neuen Autors zurückgeben
        return result.insertedId.toString();
    } catch (error) {
        console.log("Error creating author:", error.message);
        return null;
    }
}

// Export all functions so that they can be used in other files
export default {
    getBooks,
    getFavoriteBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    getAuthorByName,
    createAuthor
}