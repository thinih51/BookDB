<script>
    import { onMount } from "svelte";
    import { darkMode } from "$lib/stores/theme.js";
    import { get } from "svelte/store";

    // Nach dem Mount im Browser:
    onMount(() => {
        // 1) Aus localStorage lesen
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode !== null) {
            darkMode.set(storedMode === "true");
        }

        // 2) Klasse am Body setzen
        document.body.classList.toggle("dark-mode", get(darkMode));
    });

    function toggleDarkMode() {
        // 1) darkMode toggeln
        darkMode.set(!get(darkMode));

        // 2) in localStorage speichern
        localStorage.setItem("darkMode", get(darkMode));

        // 3) Klasse am Body anpassen
        document.body.classList.toggle("dark-mode", get(darkMode));
    }
</script>

<div class="container">
    <nav class="navbar navbar-expand-lg bg-dark shadow-lg p-3 rounded">
        <div class="container-fluid">
            <!-- Logo -->
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

            <!-- Hamburger Button (Bootstrap) -->
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

            <!-- Navigation Links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
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
                    <!-- Hier der Dark-Mode-Schalter -->
                    <li class="nav-item px-3">
                        <button
                            class="btn btn-outline-light fw-bold"
                            on:click={toggleDarkMode}
                        >
                            <!-- Dynamischer Button-Text -->
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
    /* 
      Wrap Bootstrap selectors in :global() because 
      we want these styles to apply to the actual .navbar, .navbar-brand, etc. 
    */

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

    /* Optional Glow Effect (if used) */
    :global(.hover-glow) {
        position: relative;
        text-decoration: none !important;
    }

    :global(.hover-glow)::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0%;
        height: 2px;
        background-color: white;
        transition: width 0.3s ease-in-out;
        transform: translate(-50%, -50%);
    }

    :global(.hover-glow:hover)::after {
        width: 80%;
    }

    /* Dark Mode Overrides */
    :global(body.dark-mode .navbar) {
        background-color: #2d2b2b;
        background-image: none; /* Removes the gradient in dark mode */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    }

    :global(body.dark-mode .navbar-brand),
    :global(body.dark-mode .nav-link) {
        color: #ffdd66;
    }

    :global(body.dark-mode .nav-link:hover) {
        color: #ffe680;
    }
</style>
