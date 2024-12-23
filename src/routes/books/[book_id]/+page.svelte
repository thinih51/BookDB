<script>
    let { data } = $props();
</script>

<div class="container mt-4">
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
                <!-- Das versteckte Feld mit der Buch-ID -->
                <input type="hidden" name="id" value={data.book._id} />
                <button type="submit" class="btn btn-danger">
                    Delete Book
                </button>
            </form>
        </div>
    </div>
</div>
