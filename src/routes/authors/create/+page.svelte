<script>
    import CreateAuthor from "$lib/components/CreateAuthor.svelte";

    let { form } = $props(); // Daten für Erfolg/Fehler aus der Server-Action
</script>

<div>
    <CreateAuthor {form} action="?/create-author" />
</div>
