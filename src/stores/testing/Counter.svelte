<script>
  import { writable } from "svelte/store"

  const count = writable(0)
  let byHowMuch = 1

  function increment() {
    count.update((prev) => prev + byHowMuch)
  }

  function decrement() {
    count.update((prev) => prev - byHowMuch)
  }
</script>

<main>
  <h1>Counter</h1>
  <p>Count: {$count}</p>
  <form>
    <label>
      <input bind:value={byHowMuch} type="number" />
    </label>
  </form>
  <button on:click={increment}>Increment</button>
  <button on:click={decrement}>Decrement</button>
</main>

<style>
  button {
    background-color: red;
    color: white;
    padding: 1rem;
  }

  input {
    background-color: white;
    padding: 1rem;
    margin: 0.5rem 0;
    border: 1px solid;
  }
</style>
