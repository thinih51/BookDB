<script>
    import { enhance } from "$app/forms";

    let { book } = $props();
</script>

<div class="card mb-3 shadow-sm visible">
    <div class="row g-0">
        <div class="col-md-4">
            <img
                src={book.cover || "/images/placeholder.jpg"}
                class="img-fluid rounded-start"
                alt={book.title}
            />
        </div>
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
                        <form
                            method="POST"
                            action="?/removeFromFavorite"
                            use:enhance
                        >
                            <input type="hidden" name="id" value={book._id} />
                            <button class="btn btn-danger"
                                >Remove from Favorite</button
                            >
                        </form>
                    {:else}
                        <form
                            method="POST"
                            action="?/addToFavorite"
                            use:enhance
                        >
                            <input type="hidden" name="id" value={book._id} />
                            <button class="btn btn-success"
                                >Add to Favorite</button
                            >
                        </form>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        transform: scale(1);
        opacity: 0;
        transition:
            transform 0.3s ease,
            opacity 0.5s ease;
    }

    .card.visible {
        opacity: 1;
        transform: scale(1);
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
</style>