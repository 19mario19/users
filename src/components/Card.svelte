<script>
  import { Link } from "svelte-routing"
  export let first_name
  export let last_name
  export let city
  export let email
  export let _id
  export let age
  export let index
  export let avatar

  const fullName = () => `${first_name} ${last_name}`
  const initials = () => `${first_name[0]} ${last_name[0]}`
</script>

{#if first_name}
  <Link to={`/users/${_id}`}>
    <div class="card">
      <div class="top">
        {#if avatar}
          <img src={avatar} alt="avatar" />
        {:else}
          <h3>{initials()}</h3>
        {/if}
      </div>
      <div class="bottom">
        <h3>{fullName()}</h3>
        <h4>Age: {age}</h4>
        <h4>Location: {city}</h4>
        <p>Email: {email}</p>
      </div>
    </div>
  </Link>
{:else}
  <p>Loading...</p>
{/if}

<style>
  :root {
    --color-blue: #4285f4;
    --color-red: #ea4335;
    --color-green: #34a853;
    --color-yellow: #fbbc05;
    --color-orange: #fbbc05;
    --color-purple: #673ab7;
    --color-pink: #e91e63;
    --color-teal: #00bcd4;
    --color-indigo: #3f51b5;
    --color-brown: #795548;
    --color-grey: #9e9e9e;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.2rem;
    border-radius: 6px;
    background-color: #eff2f5;
    color: #333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    min-height: 200px;
    max-width: 350px;
    margin-bottom: 2.5rem;
    text-align: center;
    border-bottom: 5px solid var(--color-teal);
    /* outline: 1px solid var(--color-indigo); */
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.4rem;
    color: var(--color-blue);
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

  .top {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .top h3,
  .top img {
    background-color: var(--color-teal);
    color: white;
    height: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -80px;
    border: 5px solid;
  }
</style>
