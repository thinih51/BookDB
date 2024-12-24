<script>
    let { author } = $props();
</script>

<div class="card p-3 shadow-sm">
    <h3 class="card-title">{author.name}</h3>

    {#if author.age}
        <p class="card-text mb-1">Age: {author.age}</p>
    {/if}

    {#if author.gender}
        <p class="card-text">Gender: {author.gender}</p>
    {/if}
</div>
