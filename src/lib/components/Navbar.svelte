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
                    <!-- Dark Mode Toggle Button -->
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
