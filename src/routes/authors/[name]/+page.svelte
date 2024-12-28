<script>
    import AuthorCard from "$lib/components/AuthorCard.svelte";
    let { data } = $props();
    
    function goBack() {
        window.history.back();
    }
</script>

<div class="container mt-3">
    <button class="btn btn-primary" onclick={goBack}>Back</button>
    
    <AuthorCard author={data.author} />
</div>
