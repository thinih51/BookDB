<script>
    import BookCard from "$lib/components/BookCard.svelte";
    import { writable, derived } from "svelte/store";

    let { data } = $props();

    const searchQuery = writable("");
    const sortBy = writable("title");

    // Filter and sort books
    const filteredBooks = derived(
        [searchQuery, sortBy],
        ([$searchQuery, $sortBy]) =>
            data.books
                .filter((book) => {
                    const query = $searchQuery.toLowerCase();
                    return (
                        book.title.toLowerCase().includes(query) ||
                        book.authors.join(", ").toLowerCase().includes(query) ||
                        book.year.toString().includes($searchQuery)
                    );
                })
                .sort((a, b) => {
                    if ($sortBy === "title")
                        return a.title.localeCompare(b.title);
                    if ($sortBy === "year") return a.year - b.year;
                    if ($sortBy === "pages") return a.pages - b.pages;
                }),
    );

    // Debounce function for search
    let debounceTimeout;
    function debounceSearch(query) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            searchQuery.set(query);
        }, 300);
    }
</script>

<div class="container mt-3">
    <h1 class="text-center mb-4">All Books</h1>

    <!-- Search and Sort Controls -->
    <div class="row mb-3">
        <div class="col-md-6">
            <input
                type="text"
                class="form-control"
                placeholder="Search by title, author, or year"
                oninput={(e) => debounceSearch(e.target.value)}
            />
        </div>
        <div class="col-md-6">
            <select class="form-select" bind:value={$sortBy}>
                <option value="title">Sort by Title</option>
                <option value="year">Sort by Year</option>
                <option value="pages">Sort by Pages</option>
            </select>
        </div>
    </div>

    <!-- Book List -->
    <div class="row">
        {#if $filteredBooks.length > 0}
            {#each $filteredBooks as book}
                <div class="col-md-6 mb-4">
                    <BookCard {book} />
                </div>
            {/each}
        {:else}
            <p class="text-center text-muted">No books found.</p>
        {/if}
    </div>
</div>
