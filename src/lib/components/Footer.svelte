<footer class="bg-dark text-white text-center py-3 mt-5">
    <div class="container">
        <p class="mb-1">
            © {new Date().getFullYear()} ShedaDB. All Rights Reserved.
        </p>
        <div>
            <span class="text-decoration-none text-white mx-2"
                >Privacy Policy</span
            >
            <span class="text-decoration-none text-white mx-2"
                >Terms of Service</span
            >
        </div>
    </div>
</footer>

<style>
    /* Base styling for the footer (light mode) */
    footer {
        text-align: center;
        padding: 10px 0;
        background-color: #2c3e50;
        color: white;
        margin-top: 30px;
        font-size: 0.9rem;
    }

    /* Dark Mode override */
    :global(body.dark-mode) footer {
        background-color: #2d2b2b;
        color: #aaaaaa;
    }
</style>
