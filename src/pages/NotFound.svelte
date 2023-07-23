<script>
  import { Link } from "svelte-routing"
</script>

<div class="not-found">
  <h1>This page does not exist</h1>
  <Link><button>Go home</button></Link>
</div>

<style>
    .not-found {
        text-align: center;
    }
    button {
        cursor: pointer;
        background-color: white;
        padding: .1rem .2rem;
        border-radius: 10px;
        border: 1px solid;
        transition: all 350ms ease-in-out;
    }
    button:active {
        transform:scale(.85);
    }
    button:hover {
        opacity: 1.55;

    }
</style>