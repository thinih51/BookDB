<script>
    let { data, form } = $props();
</script>

<div class="container mt-3">
    <a href="/books" class="btn btn-primary">Back</a>
    <h1>{data.book.title}</h1>
    <div class="row">
        <div class="col-md-4">
            <img
                src={data.book.cover}
                alt={data.book.title}
                class="img-fluid"
            />
        </div>
        <div class="col-md-8">
            <p>Year: {data.book.year}</p>
            <p>Pages: {data.book.pages}</p>
            <p>Author{data.book.authors.length > 1 ? "s" : ""}:</p>
            <ul>
                {#each data.book.authors as author}
                    <li>
                        <a href={"/authors/" + encodeURIComponent(author)}>
                            {author}
                        </a>
                    </li>
                {/each}
            </ul>
            <form
                method="post"
                action="?/delete"
                style="display: inline-block;"
            >
                <input type="hidden" name="id" value={data.book._id} />
                <button type="submit" class="btn btn-danger">
                    Delete Book
                </button>
            </form>
        </div>
    </div>
</div>
<div class="container mt-3">
    <h1>Update Book</h1>
    <form class="mt-4" method="POST" action="?/update">
        <input type="hidden" name="_id" value={data.book._id} />
        <div class="mb-3">
            <label class="form-label" for="title">Title</label>
            <input
                name="title"
                bind:value={data.book.title}
                class="form-control"
                type="text"
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for="year">Year</label>
            <input
                name="year"
                bind:value={data.book.year}
                class="form-control"
                type="number"
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for="pages">Pages</label>
            <input
                name="pages"
                bind:value={data.book.pages}
                class="form-control"
                type="number"
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for="authors">Authors</label>
            <input
                name="authors"
                value={data.book.authors?.join(", ")}
                class="form-control"
                type="text"
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for="cover">Cover URL</label>
            <input
                name="cover"
                bind:value={data.book.cover}
                class="form-control"
                type="text"
            />
        </div>
        <button class="btn btn-success">Save Changes</button>
    </form>

    {#if form?.success}
        <p class="text-success mt-3">Book updated successfully!</p>
    {/if}
</div>
