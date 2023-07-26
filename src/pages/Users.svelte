<script>
  import { onDestroy, onMount } from "svelte"
  import CardList from "../components/CardList.svelte"
  import BASE_URL from "../globalVariable"
  import { UserStore } from "../stores/UserStore"

  let error = "Loading..."

  async function getData() {
    const response = await fetch(BASE_URL)
    if (response.ok) {
      const json = await response.json()
      UserStore.update(() => [...json.users])
    } else {
      console.log(error)
    }
  }
  // Fetch the data on component mount
    getData()


  // Clean up and refetch the data before the component is destroyed
  onDestroy(() => {
    getData()
  })
</script>

{#if $UserStore.length > 0}
  <CardList users={$UserStore} />
{:else}
  <p class="loading">{error}</p>
{/if}

<style>
  .loading {
    padding: 2rem;
    font-size: 40px;
    text-align: center;
  }
</style>
