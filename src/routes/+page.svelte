<script>
    import Footer from "$lib/components/Footer.svelte";
    import "./styles.css";
</script>

<div class="container mt-3">
    <!-- Welcome Section -->
    <header class="text-center mb-4">
        <h1 class="display-4">
            Welcome to ShedaDB - Your Personal Book Database!
        </h1>
        <p>
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
                <strong>Organize Your Books:</strong> Keep track of titles, authors,
                genres, and more.
            </li>
            <li class="list-group-item">
                <strong>Build Your Favorites:</strong> Save your most-loved books
                in a personal favorites list.
            </li>
            <li class="list-group-item">
                <strong>Discover Insights:</strong> View statistics about your collection,
                like the number of books or your favorite genres.
            </li>
            <li class="list-group-item">
                <strong>Search and Filter:</strong> Quickly find books by title,
                author, or category.
            </li>
            <li class="list-group-item">
                <strong>Add New Books:</strong> Expand your collection with detailed
                entries for new reads.
            </li>
        </ul>
    </section>

    <!-- Why Use ShedaDB Section -->
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
            <li class="list-group-item">
                Future features include recommendations, book reviews, and
                progress tracking!
            </li>
        </ul>
        <p class="text-center mt-3">
            <em
                >Start exploring and make ShedaDB your go-to tool for book
                management!</em
            >
        </p>
    </section>
</div>
