<script>
    let { book } = $props();
</script>

<div class="card mb-3 shadow-sm" style="max-width: 540px;">
    <div class="row g-0">
        <!-- Book Cover -->
        <div class="col-md-4">
            <img
                src={book.cover || "/images/placeholder.jpg"}
                class="img-fluid rounded-start"
                alt={book.title}
            />
        </div>

        <!-- Book Details -->
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{book.title}</h5>
                <p class="card-text">
                    <strong>Author(s):</strong>
                    {book.authors?.join(", ") || "Unknown"}
                </p>
                <p class="card-text">
                    <strong>Year:</strong>
                    {book.year || "Unknown"} |
                    <strong>Pages:</strong>
                    {book.pages || "N/A"}
                </p>
                <div>
                    <a
                        href={`/books/${book._id}`}
                        class="btn btn-primary btn-sm">Details</a
                    >
                    {#if book.favorite}
                        <span class="badge bg-success ms-2">Favorite</span>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
