<script>
    import { enhance } from "$app/forms";

    let { book } = $props();
</script>

<div class="card mb-3 shadow-sm visible" in:fly={{ y: 100, duration: 500 }}>
    <div class="row g-0">
        <!-- Book Cover Section -->
        <div class="col-md-4" in:scale={{ duration: 400 }}>
            <img
                src={book.cover || "/images/placeholder.jpg"}
                class="img-fluid rounded-start"
                alt={book.title}
                style="transition: transform 0.3s ease;"
                onmouseenter={(e) =>
                    (e.target.style.transform = "rotate(5deg) scale(1.1)")}
                onmouseleave={(e) => (e.target.style.transform = "none")}
            />
        </div>

        <!-- Book Details Section -->
        <div class="col-md-8">
            <div class="card-body" in:fade={{ duration: 300 }}>
                <h5 class="card-title" in:fly={{ x: -100, duration: 500 }}>
                    {book.title}
                </h5>

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

                <!-- Action Buttons -->
                <div>
                    <a
                        href={`/books/${book._id}`}
                        class="btn btn-primary btn-sm"
                        in:fly={{ x: -50, duration: 400 }}
                    >
                        Details
                    </a>
                    {#if book.favorite}
                        <form
                            method="POST"
                            action="?/removeFromFavorite"
                            use:enhance
                        >
                            <input type="hidden" name="id" value={book._id} />
                            <button
                                class="btn btn-danger"
                                in:scale={{ duration: 300 }}
                            >
                                Remove from Favorite
                            </button>
                        </form>
                    {:else}
                        <form
                            method="POST"
                            action="?/addToFavorite"
                            use:enhance
                        >
                            <input type="hidden" name="id" value={book._id} />
                            <button
                                class="btn btn-success"
                                in:fade={{ duration: 400 }}
                            >
                                Add to Favorite
                            </button>
                        </form>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Card Styling */
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
        background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    }

    /* Button Hover Effect */
    .btn {
        position: relative;
        overflow: hidden;
    }

    .btn::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    .btn:hover::after {
        transform: scaleX(1);
    }

    /* Image Hover Effect */
    img {
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }

    img:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
</style>
