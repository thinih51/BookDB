<script>
    let {form} = $props();
</script>

<div class="container mt-5">
    <h1 class="text-center mb-4">Add a New Book</h1>
    <form method="post" action="?/create" class= "needs-validation">
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                class="form-control"
                required
            />
        </div>

        <div class="mb-3">
            <label for="year" class="form-label">Year</label>
            <input
                type="number"
                id="year"
                name="year"
                class="form-control"
                required
            />
        </div>

        <div class="mb-3">
            <label for="pages" class="form-label">Pages</label>
            <input
                type="number"
                id="pages"
                name="pages"
                class="form-control"
                required
            />
        </div>

        <div class="mb-3">
            <label for="authors" class="form-label">Authors</label>
            <input
                type="text"
                id="authors"
                name="authors"
                class="form-control"
                placeholder="Separate authors with commas"
                required
            />
        </div>

        <div class="mb-3">
            <label for="cover" class="form-label">Cover URL</label>
            <input type="text" id="cover" name="cover" class="form-control" />
        </div>

        <div class="form-check mb-3">
            <input
                class="form-check-input"
                type="checkbox"
                id="favorite"
                name="favorite"
            />
            <label class="form-check-label" for="favorite"
                >Mark as Favorite</label
            >
        </div>

        <button type="submit" class="btn btn-primary">Add Book</button>
    </form>
</div>

{#if form?.success}
    <p class="mt-3 text-success">Book created successfully!</p>
{/if}

{#if form?.error}
    <p class="mt-3 text-danger">{form.error}</p>
{/if}