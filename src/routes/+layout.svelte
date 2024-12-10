<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import "./styles.css";
    let { children } = $props();
</script>

<div>
    <Navbar/>
    {@render children()}
</div>
