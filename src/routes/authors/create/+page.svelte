<script>
    import CreateAuthor from "$lib/components/CreateAuthor.svelte";
    let { form } = $props();
</script>

<div>
    <CreateAuthor {form} action="?/create-author" />
</div>
