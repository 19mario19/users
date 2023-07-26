<script>
  import Card from "./Card.svelte"
  export let users = []
</script>

<div class="card-list">
  {#if users}
    {#each users as { first_name, last_name, age, city, email, _id }, index}
      <Card
        {first_name}
        {last_name}
        {age}
        {city}
        {email}
        {_id}
        avatar = {`https://i.pravatar.cc/80?u=${email}`}
        {index}
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
</style>
