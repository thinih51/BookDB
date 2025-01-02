<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import "./styles.css";
    let { children } = $props();
</script>

<!-- Navbar -->
<Navbar />

<!-- Main Content -->
<div class="container mt-3">
    {@render children()}
</div>

<!-- Footer -->
<Footer />
