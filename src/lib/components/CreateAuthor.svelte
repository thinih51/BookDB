<script>
    let { form } = $props();
</script>

<div class="container mt-3">
    <h1 class="text-center mb-4">Add a New Author</h1>

    <!-- Author Form -->
    <form method="post" action="?/create" class="needs-validation">
        <!-- Author Name -->
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                placeholder="Enter the author's name"
                required
            />
        </div>

        <!-- Author Age -->
        <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input
                type="number"
                id="age"
                name="age"
                class="form-control"
                placeholder="Enter the author's age"
                required
            />
        </div>

        <!-- Author Gender -->
        <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select id="gender" name="gender" class="form-control" required>
                <option value="" disabled selected>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Add Author</button>
    </form>

    <!-- Success and Error Messages -->
    {#if form?.success}
        <p class="mt-3 text-success">Author created successfully!</p>
    {/if}

    {#if form?.error}
        <p class="mt-3 text-danger">{form.error}</p>
    {/if}
</div>
