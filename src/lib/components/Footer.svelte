<footer class="bg-dark text-white text-center py-3 mt-5">
    <div class="container">
        <!-- Footer Text -->
        <p class="mb-1">
            © {new Date().getFullYear()} ShedaDB. All Rights Reserved.
        </p>

        <!-- Text Section -->
        <div>
            <span class="text-white mx-2">Privacy Policy</span>
            <span class="text-white mx-2">Terms of Service</span>
        </div>
    </div>
</footer>

<style>
    footer {
        text-align: center;
        padding: 10px 0;
        background-color: #2c3e50 !important;
        color: white !important;
        margin-top: 30px !important;
    }

    :global(body.dark-mode) footer {
        background-color: #2d2b2b !important;
    }

    /* Styling für Texte im Footer */
    footer span {
        cursor: default;
        /* Kein Hover-Effekt, da kein Link */
        font-weight: 400;
    }
</style>
