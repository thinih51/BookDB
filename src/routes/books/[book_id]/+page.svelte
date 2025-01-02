<script>
    let { data, form } = $props();
</script>

<!-- Book Details Section -->
<div class="container mt-3">
    <a href="/books" class="btn btn-primary mb-3">Back</a>
    <h1 class="mb-4">{data.book.title}</h1>

    <div class="row">
        <!-- Book Cover -->
        <div class="col-md-4">
            <img
                src={data.book.cover}
                alt={data.book.title}
                class="img-fluid rounded shadow-sm"
            />
        </div>

        <!-- Book Information -->
        <div class="col-md-8">
            <p><strong>Year:</strong> {data.book.year}</p>
            <p><strong>Pages:</strong> {data.book.pages}</p>
            <p>
                <strong>Author{data.book.authors.length > 1 ? "s" : ""}:</strong
                >
            </p>
            <ul>
                {#each data.book.authors as author}
                    <li>
                        <a href={"/authors/" + encodeURIComponent(author)}>
                            {author}
                        </a>
                    </li>
                {/each}
            </ul>

            <!-- Delete Book -->
            <form method="post" action="?/delete" class="d-inline-block">
                <input type="hidden" name="id" value={data.book._id} />
                <button type="submit" class="btn btn-danger">
                    Delete Book
                </button>
            </form>
        </div>
    </div>
</div>

<!-- Update Book Section -->
<div class="container mt-5">
    <h2>Update Book</h2>
    <form class="mt-4" method="POST" action="?/update">
        <input type="hidden" name="_id" value={data.book._id} />

        <!-- Title -->
        <div class="mb-3">
            <label class="form-label" for="title">Title</label>
            <input
                name="title"
                bind:value={data.book.title}
                class="form-control"
                type="text"
                required
            />
        </div>

        <!-- Year -->
        <div class="mb-3">
            <label class="form-label" for="year">Year</label>
            <input
                name="year"
                bind:value={data.book.year}
                class="form-control"
                type="number"
                required
            />
        </div>

        <!-- Pages -->
        <div class="mb-3">
            <label class="form-label" for="pages">Pages</label>
            <input
                name="pages"
                bind:value={data.book.pages}
                class="form-control"
                type="number"
                required
            />
        </div>

        <!-- Authors -->
        <div class="mb-3">
            <label class="form-label" for="authors">Authors</label>
            <input
                name="authors"
                value={data.book.authors?.join(", ")}
                class="form-control"
                type="text"
                placeholder="Separate authors with commas"
                required
            />
        </div>

        <!-- Cover URL -->
        <div class="mb-3">
            <label class="form-label" for="cover">Cover URL</label>
            <input
                name="cover"
                bind:value={data.book.cover}
                class="form-control"
                type="text"
                placeholder="Enter a valid image URL"
                required
            />
        </div>

        <!-- Save Changes -->
        <button class="btn btn-success">Save Changes</button>
    </form>

    <!-- Success Message -->
    {#if form?.success}
        <p class="text-success mt-3">Book updated successfully!</p>
    {/if}
</div>
