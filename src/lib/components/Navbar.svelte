<script>
    import { onMount } from "svelte";
    import { darkMode } from "$lib/stores/theme.js";
    import { get } from "svelte/store";

    // Nach dem Mount im Browser:
    onMount(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode !== null) {
            darkMode.set(storedMode === "true");
        }
        document.body.classList.toggle("dark-mode", get(darkMode));
    });

    function toggleDarkMode() {
        darkMode.set(!get(darkMode));
        localStorage.setItem("darkMode", get(darkMode));
        document.body.classList.toggle("dark-mode", get(darkMode));
    }
</script>

<div class="container">
    <nav class="navbar navbar-expand-lg bg-dark shadow-lg p-3 rounded">
        <div class="container-fluid align-items-center">
            <a class="navbar-brand text-white fw-bold fs-3" href="/">
                <img
                    src="/images/logo.png"
                    alt="ShedaDB Logo"
                    width="30"
                    height="30"
                    class="d-inline-block align-text-top"
                />
                ShedaDB
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item px-3">
                        <a class="nav-link text-white fw-bold" href="/books">
                            Show All Books
                        </a>
                    </li>
                    <li class="nav-item px-3">
                        <a
                            class="nav-link text-white fw-bold"
                            href="/books/favorites"
                        >
                            Favorites
                        </a>
                    </li>
                    <li class="nav-item px-3">
                        <a
                            class="nav-link text-white fw-bold"
                            href="/books/create"
                        >
                            Add New Book
                        </a>
                    </li>
                    <li class="nav-item px-3">
                        <a
                            class="nav-link text-white fw-bold"
                            href="/authors/create"
                        >
                            Add New Author
                        </a>
                    </li>
                    <li class="nav-item px-3">
                        <button
                            class="btn btn-outline-light fw-bold align-middle"
                            on:click={toggleDarkMode}
                        >
                            {#if $darkMode}
                                Switch to Light Mode
                            {:else}
                                Switch to Dark Mode
                            {/if}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

<style>
    :global(.navbar) {
        background: linear-gradient(90deg, #2c3e50, #4a90e2);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    :global(.navbar-brand) {
        font-family: "Georgia", serif;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        text-decoration: none;
    }

    :global(.navbar-nav) {
        margin-left: auto;
    }

    :global(.nav-link) {
        transition: all 0.3s ease-in-out;
        font-size: 1.1rem;
        color: white;
        text-decoration: none !important;
    }

    :global(.nav-link:hover) {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        transform: scale(1.05);
        text-decoration: none !important;
    }

    :global(.navbar .align-items-center) {
        display: flex;
        align-items: center;
    }

    :global(.navbar-nav .nav-item) {
        display: flex;
        align-items: center;
    }

    :global(.btn) {
        display: inline-flex;
        align-items: center;
    }

    :global(body.dark-mode .navbar) {
        background-color: #2d2b2b;
        background-image: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    }
</style>
