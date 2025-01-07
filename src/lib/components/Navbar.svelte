<script>
    import { onMount } from "svelte";
    import { darkMode } from "$lib/stores/theme.js";
    import { get } from "svelte/store";

    // Initialisiere Dark Mode beim Mount
    onMount(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode !== null) {
            darkMode.set(storedMode === "true");
        }
        document.body.classList.toggle("dark-mode", get(darkMode));
    });

    // Toggle Dark Mode
    function toggleDarkMode() {
        darkMode.set(!get(darkMode));
        localStorage.setItem("darkMode", get(darkMode));
        document.body.classList.toggle("dark-mode", get(darkMode));
    }
</script>

<div class="container">
    <nav class="navbar navbar-expand-lg bg-dark shadow-lg p-3 rounded">
        <div class="container-fluid align-items-center">
            <!-- Logo and Brand Name -->
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

            <!-- Navbar Toggler -->
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

            <!-- Navbar Links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item px-2">
                        <a class="nav-link text-white fw-bold" href="/books">
                            Show All Books
                        </a>
                    </li>
                    <li class="nav-item px-2">
                        <a
                            class="nav-link text-white fw-bold"
                            href="/books/favorites"
                        >
                            Favorites
                        </a>
                    </li>
                    <li class="nav-item px-2">
                        <a
                            class="nav-link text-white fw-bold"
                            href="/books/create"
                        >
                            Add New Book
                        </a>
                    </li>
                    <li class="nav-item px-2">
                        <a
                            class="nav-link text-white fw-bold"
                            href="/authors/create"
                        >
                            Add New Author
                        </a>
                    </li>
                    <!-- Dark Mode Toggle Button -->
                    <li class="nav-item px-2">
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
    .navbar {
        background: linear-gradient(90deg, #2c3e50, #4a90e2) !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
    }

    .navbar-brand {
        font-family: "Georgia", serif;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4) !important;
        text-decoration: none !important;
        color: white;
    }

    .navbar-nav {
        margin-left: auto !important;
        display: flex;
        flex-wrap: nowrap !important;
    }

    .nav-link {
        white-space: nowrap;
        padding: 0.5rem 1rem !important;
        font-size: 1.1rem !important;
        color: white !important;
        text-decoration: none !important;
        transition: all 0.3s ease-in-out !important;
    }

    .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.2) !important;
        border-radius: 4px !important;
        transform: scale(1.05) !important;
    }

    :global(body.dark-mode) .navbar {
        background-color: #2d2b2b !important;
        background-image: none !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6) !important;
    }

    :global(body.dark-mode) .nav-link {
        color: #aaaaaa !important;
    }

    :global(body.dark-mode) .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        color: #ffffff !important;
    }

    @media (max-width: 768px) {
        .navbar-nav {
            flex-direction: column;
            text-align: center;
        }

        .nav-item {
            margin-bottom: 0.5rem;
        }
    }
</style>
