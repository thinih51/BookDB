<script>
    import BookCard from "$lib/components/BookCard.svelte";
    import { writable, derived } from "svelte/store";

    let { data } = $props(); // Bücher-Daten von der Server-Seite

    let searchQuery = writable(""); // Suchanfrage
    let sortBy = writable("title"); // Standard-Sortierung nach Titel

    // Gefilterte Bücher basierend auf Suchanfrage und Sortierung
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

    // Debouncing für performante Suchabfragen
    let debounceTimeout;
    function debounceSearch(query) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            searchQuery.set(query);
        }, 300); // 300ms Verzögerung
    }
</script>

<div class="container mt-3">
    <h1 class="text-center mb-4">All Books</h1>

    <!-- Such- und Filteroptionen -->
    <div class="row mb-3">
        <!-- Suchfeld -->
        <div class="col-md-6">
            <!-- svelte-ignore event_directive_deprecated -->
            <input
                type="text"
                class="form-control"
                placeholder="Search by title, author, or year"
                on:input={(e) => debounceSearch(e.target.value)}
            />
        </div>

        <!-- Sortieroptionen -->
        <div class="col-md-6">
            <select class="form-select" bind:value={$sortBy}>
                <option value="title">Sort by Title</option>
                <option value="year">Sort by Year</option>
                <option value="pages">Sort by Pages</option>
            </select>
        </div>
    </div>

    <!-- Gefilterte und sortierte Bücher anzeigen -->
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
