<script>
    import BookCard from "$lib/components/BookCard.svelte";
    let {data} = $props(); // Die Bücher, die von `+page.server.js` geladen werden
</script>

<div class="container mt-5">
    <h1 class="text-center mb-4">All Books</h1>

    {#if data.books && data.books.length > 0}
        <div class="row">
            {#each data.books as book}
                <div class="col-md-6 mb-4">
                    <BookCard {book} />
                </div>
            {/each}
        </div>
    {:else}
        <p class="text-center text-muted">
            No books found. Add some to get started!
        </p>
    {/if}
</div>
