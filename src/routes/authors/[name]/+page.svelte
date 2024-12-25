<!-- src/routes/authors/[name]/+page.svelte -->
<script>
    import AuthorCard from "$lib/components/AuthorCard.svelte";
    let { data } = $props();
    // data.author = { _id: "...", name: "...", age: ..., gender: ... }

    // Importiere deine neue AuthorCard
</script>

<div class="container mt-3">
    <a href="/books" class="btn btn-primary">Back to Books</a>

    <!-- Benutze hier die AuthorCard-Komponente -->
    <AuthorCard author={data.author} />
</div>
