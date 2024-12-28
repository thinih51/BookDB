<script>
    import AuthorCard from "$lib/components/AuthorCard.svelte";
    let { data } = $props();
</script>

<div class="container mt-3">
    <a href="/books" class="btn btn-primary">Back to Books</a>
    
    <AuthorCard author={data.author} />
</div>
