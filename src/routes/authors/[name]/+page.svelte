<script>
    import AuthorCard from "$lib/components/AuthorCard.svelte";
    let { data } = $props();
    
    function goBack() {
        window.history.back();
    }
</script>

<div class="container mt-3">
    <button class="btn btn-primary" onclick={goBack}>Back</button>
    <h1>Author Details</h1>
    
    <AuthorCard author={data.author} />
</div>
