<!-- src/routes/authors/[name]/+page.svelte -->
<script>
    import AuthorCard from "$lib/components/AuthorCard.svelte";
    let { data } = $props();
    // data.author = { _id: "...", name: "...", age: ..., gender: ... }
</script>

<div class="container mt-4">
    <a href="/books" class="btn btn-primary">Back to Books</a>
    <h1>{data.author.name}</h1>
    <p>Age: {data.author.age}</p>
    <p>Gender: {data.author.gender}</p>
</div>