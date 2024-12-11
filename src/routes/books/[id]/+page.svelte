<script>
    let { data } = $props();
</script>

<div class="container mt-4">
    <a href="/books">Back</a>
    <h1>{data.book.title}</h1>
    <div class="row">
        <div class="col-md-4">
            <img src={data.book.cover} alt={data.book.title} class="img-fluid" />
        </div>
        <div class="col-md-8">
            <p>Jahr: {data.book.year}</p>
            <p>Dauer: {data.book.pages}</p>
            <p>Cast:</p>
            <ul>
                {#each data.book.authors as author}
                    <li>{author}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>