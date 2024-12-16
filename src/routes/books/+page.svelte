<script>
    import BookCard from "$lib/components/BookCard.svelte";
    let { data } = $props();
</script>

<div class="container mt-5">
    <h1 class="text-center mb-4">All Books</h1>
    <div class="row">
        {#each data.books as book}
            <div class="col-md-6 mb-4">
                <BookCard {book} />
            </div>
        {/each}
    </div>
</div>
