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
    book.cover = "/images/placeholder.jpg"; // Default cover image
    book.authors = []; // Empty list for authors
    book.favorite = false; // Default value
    try {
        const collection = db.collection("books");
        const result = await collection.insertOne(book);
        return result.insertedId.toString(); // Return the book ID
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Update a book
// Example book object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "The Mystery of Altura",
  year: 2024,
  pages: 350,
  authors: [
    "Lena Herzog",
    "Maximilian Schröder",
    "Sophia Neumann"
  ],
  cover: "/images/Altura.png",
  favorite: true
} 
*/
// Returns: id of the updated book or null if the book could not be updated
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
// Returns: id of the deleted book or null if the book could not be deleted
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

// Export all functions so that they can be used in other files
export default {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
};
