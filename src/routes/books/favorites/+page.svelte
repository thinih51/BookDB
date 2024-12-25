<script>
    import BookCard from "$lib/components/BookCard.svelte";
    let { data } = $props();
</script>

<div class="container mt-3">
    <h1 class="text-center mb-4">Favorite Books</h1>

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
            You have no favorite books yet. Start adding some!
        </p>
    {/if}
</div>