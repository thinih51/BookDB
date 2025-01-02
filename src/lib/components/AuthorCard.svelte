<script>
    let { author } = $props();
</script>

<!-- Author Card -->
<div
    role="region"
    class="card p-4 shadow-lg rounded border-0 visible"
    style="background: linear-gradient(to right, #d8eefe, #e8f7ff);"
    in:fly={{ y: 100, duration: 500 }}
    onmouseenter={() =>
        (event.target.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.3)")}
    onmouseleave={() =>
        (event.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)")}
>
    <!-- Author Name -->
    <h3
        class="card-title text-center mb-3"
        style="color: black;"
        in:fade={{ duration: 300 }}
    >
        {author.name}
    </h3>

    <!-- Author Age -->
    {#if author.age}
        <p
            class="card-text text-muted text-center mb-2"
            in:scale={{ duration: 400 }}
        >
            Age: <strong>{author.age}</strong>
        </p>
    {/if}

    <!-- Author Gender -->
    {#if author.gender}
        <p
            class="card-text text-muted text-center"
            in:fly={{ x: -50, duration: 400 }}
        >
            Gender: <strong>{author.gender}</strong>
        </p>
    {/if}
</div>

<style>
    /* Card Styling */
    .card {
        max-width: 400px;
        margin: 20px auto;
        transition:
            transform 0.3s,
            box-shadow 0.3s;
    }

    .card.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .card:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
    }

    /* Title Styling with Animation */
    .card-title {
        position: relative;
        overflow: hidden;
    }

    .card-title::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, #007bff, #00d4ff);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
    }

    .card-title:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    /* Text Styling */
    .card-text {
        transition: color 0.3s ease;
    }

    .card-text:hover {
        color: #007bff;
    }
</style>
