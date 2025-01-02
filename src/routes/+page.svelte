<script>
    import "./styles.css";
    import { fly } from "svelte/transition";
    import { backOut } from "svelte/easing";
</script>

<div class="container mt-3">
    <!-- Header Section -->
    <header class="text-center mb-4">
        <h1
            class="display-4"
            in:fly={{ y: 100, duration: 500, easing: backOut }}
        >
            Welcome to ShedaDB - Your Personal Book Database!
        </h1>
        <p class="lead" in:fly={{ y: 100, duration: 700, easing: backOut }}>
            ShedaDB is the perfect platform for book enthusiasts to organize,
            discover, and enjoy their favorite reads. Whether you're a
            passionate reader, building a personal library, or exploring new
            genres, ShedaDB makes it effortless and enjoyable.
        </p>
    </header>

    <!-- Features Section -->
    <section class="mb-5">
        <h2 class="text-center">What Can You Do with ShedaDB?</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <strong>Organize Your Books:</strong> Keep track of titles, authors.
            </li>
            <li class="list-group-item">
                <strong>Build Your Favorites:</strong> Save your most-loved books
                in a personal favorites list.
            </li>
            <li class="list-group-item">
                <strong>Search and Filter:</strong> Quickly find books by title,
                author, or category, and sort them by title, year, or pages in ascending
                order.
            </li>
            <li class="list-group-item">
                <strong>Add New Books:</strong> Expand your collection with detailed
                entries for new reads.
            </li>
            <li class="list-group-item">
                <strong>Add New Authors:</strong> Include newly discovered or favorite
                authors to enrich your database.
            </li>
            <li class="list-group-item">
                <strong>Click Author Names for Details:</strong> In a book's detail
                view, click on the author's name to see more information about them.
            </li>
            <li class="list-group-item">
                <strong>Edit Book Properties:</strong> Modify title, author, year,
                or number of pages on a book's detail page.
            </li>
            <li class="list-group-item">
                <strong>Switch to Dark Mode:</strong> Easily toggle between light
                and dark mode for a personalized experience.
            </li>
        </ul>
    </section>

    <!-- Why Use Section -->
    <section class="mb-5">
        <h2 class="text-center">Why Use ShedaDB?</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                ShedaDB helps you stay on top of your reading habits.
            </li>
            <li class="list-group-item">
                It's easy to use, visually appealing, and customizable to your
                needs.
            </li>
        </ul>
        <p
            class="text-center mt-3"
            in:fly={{ y: 100, duration: 500, easing: backOut }}
        >
            <em
                >Start exploring and make ShedaDB your go-to tool for book
                management!</em
            >
        </p>
    </section>
</div>

<style>
    /* List Styling */
    ul.list-group {
        max-width: 600px;
        margin: 0 auto;
        padding: 0;
        list-style: none;
    }

    ul.list-group li {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ddd;
        padding: 10px 15px;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        color: #333;
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }

    ul.list-group li:hover {
        background-color: rgba(255, 255, 255, 1);
        transform: scale(1.02);
    }
</style>
