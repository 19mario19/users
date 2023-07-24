<script>
  import CardList from "../components/CardList.svelte"
  import { UserStore } from "../stores/UserStore"


  async function getData() {
    const response = await fetch("https://baza-user.onrender.com/users")
    if (response.ok) {
      const json = await response.json()
      UserStore.update(() => [...json])
    } else {
      console.log("Could not fetch the data")
    }
  }
  getData()
  

</script>

{#if $UserStore.length > 0}
  <CardList users={$UserStore} />
{:else}
  <p class="loading">Loading...</p>
{/if}

<style>
  .loading {
    padding: 2rem;
    font-size: 40px;
    text-align: center;
  }
</style>
