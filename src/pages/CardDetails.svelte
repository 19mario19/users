<script>
  import { onMount } from "svelte"
  import { Link } from "svelte-routing"
  import { UserStore } from "../stores/UserStore"

  function getId() {
    const segments = window.location.pathname.split("/")
    let id = segments[segments.length - 1]
    return id
  }

  let id
  let user = {}
  onMount(() => {
    id = getId()
    const unsubscribe = UserStore.subscribe((users) => {
      user = users.find((user) => user.id == id)
    })
    return unsubscribe
  })
</script>

<div class="card-details">
  <h1>Card Details for ID: {id}</h1>
  {#if user?.name}
    <div class="card">
      <h3>{user.name}</h3>
      <h4>Age: {user.age}</h4>
      <h4>Location: {user.city}</h4>
      <p>Email: {user.email}</p>
    </div>
  {:else}
    <p>Something went wrong... 🙄</p>
    <p>Mostly because of refresh</p>
  {/if}
  <Link to="/">
    <button>Go Home</button>
  </Link>
</div>

<style>
  .card-details {
    text-align: center;
  }

  button {
    cursor: pointer;
    background-color: rgb(248, 247, 246);
    padding: 0.2rem 0.3rem;
    border-radius: 6px;
    border: 1px solid;
    margin: 1rem 0;
  }
</style>
