<!-- src/routes/books/create/+page.svelte (Beispiel) -->
<script>
    import CreateBook from "$lib/components/CreateBook.svelte";
    let { form } = $props();
</script>

<div>
    <CreateBook {form} action="?/create" />
</div>
