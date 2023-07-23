<script>
  import Counter from "../stores/testing/Counter.svelte"
  import { count } from "../stores/testing/store"

  let byHowMuch = 1

  // functions to update the count
  function increment(){
    count.update(prev => prev + byHowMuch)
  }
  function decrement(){
    count.update(prev => prev - byHowMuch)
  }

</script>

<main>

    <h2>Store count: {$count}</h2>
    <h3>By how much?</h3>
    <form >
        <label>
            <p>{byHowMuch}</p>
            <input type="range" bind:value={byHowMuch} min="0" max="100">
        </label>
    </form>
    <button on:click={increment}>+</button>
    <button on:click={decrement}>-</button>

  <Counter />
  <h1>About</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat
    est voluptatibus esse autem saepe modi quis, dignissimos quos officiis,
    eveniet eos, perferendis sit ab soluta asperiores molestiae fuga natus ad
    sed eius dolore cupiditate beatae reprehenderit! Ad, debitis laboriosam.
    Nulla assumenda expedita odio culpa sit eius natus cupiditate enim delectus
    error sapiente quaerat, vitae obcaecati magni doloribus quod illum eum
    maiores, id est qui optio incidunt nam dolor. Aspernatur soluta corrupti
    tempora perferendis. Minima quaerat, quisquam deleniti vero id molestias
    modi aliquid. Libero nulla id facere labore voluptas. Eaque natus omnis
    voluptatem veritatis cumque aut, quam ea! Maxime, deleniti.
  </p>
  
</main>

<style>
    main {
        text-align: center;
    }
    button {
        aspect-ratio: 1;
        height: 50px;
        border-radius: 50%;
        background-color: black;
        color: white;
    }
      input {
        background-color: white;
        padding: 1rem;
        margin: .5rem 0;
        border: 1px solid;

    }
    
</style>