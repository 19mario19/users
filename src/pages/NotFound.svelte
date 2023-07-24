<script>
  import { Link } from "svelte-routing"
</script>

<div class="not-found">
  <h1>This page does not exist</h1>
  <Link to="/users/"><button>Go home</button></Link>
</div>

<style>
    .not-found {
        text-align: center;
    }
    button {
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
    border-radius: 6px;
    border: none;
    margin-top: 1rem;
  }
    button:active {
        transform:scale(.85);
    }
    button:hover {
        opacity: 1.55;

    }
</style>