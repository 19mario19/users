<script>
  import { Link } from "svelte-routing"
  export let name
  export let city
  export let email
  export let id
  export let age
  export let index

  

</script>

{#if id}
  <Link to={`/${id}`}>
    <div class="card">
      <h3>{index + 1}. {name}</h3>
      <h4>Age: {age}</h4>
      <h4>Location: {city}</h4>
      <p>Email: {email}</p>
    </div>
  </Link>
{:else}
  <p>Loading...</p>
{/if}

<style>
  .card {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    border-radius: 6px;
    background-color: #eaf1f9;
    color: #333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.4rem;
    color: #4285f4;
  }

  h4 {
    font-size: 1.2rem;
    color: #777;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #444;
  }
</style>
