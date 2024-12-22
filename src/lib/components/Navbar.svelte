<script>
    import { onMount } from "svelte";
    import { darkMode } from "$lib/stores/theme.js";

    // Beim ersten Laden den Wert aus localStorage holen
    onMount(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode !== null) {
            darkMode.set(storedMode === "true");
        }
    });

    // Sobald sich $darkMode ändert, wird dieser Code ausgeführt:
    // - Speichern im localStorage
    // - CSS-Klasse auf <body> setzen/entfernen
    $: {
        localStorage.setItem("darkMode", $darkMode);
        document.body.classList.toggle("dark-mode", $darkMode);
    }

    function toggleDarkMode() {
        darkMode.set(!$darkMode);
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
