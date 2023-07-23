<script>
  import { Router, Link, Route } from "svelte-routing"
  import Home from "./pages/Home.svelte"
  import CardDetails from "./pages/CardDetails.svelte"
  import About from "./pages/About.svelte"
  import NotFound from "./pages/NotFound.svelte"

</script>

<div class="App">
  <Router>
    <main>
      <nav>
        <Link to="users/">
          <h1>Users</h1>
        </Link>
        <div class="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <div>
        <div class="routes">
          <Route path="users/:id"><CardDetails /></Route>
          <Route path="users/about"><About /></Route>
          <Route path="users/"><Home /></Route>
          <Route path="*"><NotFound /></Route>
        </div>
      </div>
    </main>
  </Router>
</div>

<style>
  .App {
    background-color: #f9f9f9;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    background-color: rgba(196, 200, 204, 0.126);
    margin-bottom: 2rem;
  }

  .links {
    font-size: 25px;
  }

  h1 {
    font-size: 30px;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  .routes {
    padding: 2rem;
  }
</style>
