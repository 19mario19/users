<script>
  import Card from "./Card.svelte"
  export let users = []
  
</script>

<div class="card-list">
  {#if users}
    {#each users as user, index} 
      <Card
        name={user.name}
        age={user.age}
        city={user.city}
        email={user.email}
        id={user.id}
        index = {index}
      />
    {/each}
    {:else}
    <p>No user has been found...</p>
  {/if}
</div>

<style>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem;
}

/* Add styles for the Card component (Card.svelte) */

</style>
