<script>
    import BookCard from "$lib/components/BookCard.svelte";
    import { writable, derived } from "svelte/store";

    let { data } = $props();

    let searchQuery = writable("");
    let sortBy = writable("title");

    const filteredBooks = derived(
        [searchQuery, sortBy],
        ([$searchQuery, $sortBy]) => {
            return data.books
                .filter(
                    (book) =>
                        book.title
                            .toLowerCase()
                            .includes($searchQuery.toLowerCase()) ||
                        book.authors
                            .join(", ")
                            .toLowerCase()
                            .includes($searchQuery.toLowerCase()) ||
                        book.year.toString().includes($searchQuery),
                )
                .sort((a, b) => {
                    if ($sortBy === "title")
                        return a.title.localeCompare(b.title);
                    if ($sortBy === "year") return a.year - b.year;
                    if ($sortBy === "pages") return a.pages - b.pages;
                });
        },
    );

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
