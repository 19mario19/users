<script>
  import { Router, Link, Route } from "svelte-routing"
  import Users from "./pages/Users.svelte"
  import CardDetails from "./pages/CardDetails.svelte"
  import About from "./pages/About.svelte"
  import NotFound from "./pages/NotFound.svelte"
  import Home from "./pages/Home.svelte"
  import AddUser from "./pages/AddUser.svelte"
</script>

<div class="App">
  <Router>
    <main>
      <nav>
        <Link to="/users/">
          <h1>WebPro</h1>
        </Link>
        <div class="links">
          <Link to="/users/">
            <p>Home</p>
          </Link>
          <Link to="/users/list">
            <p>Users</p>
          </Link>
          <Link to="/users/add">
            <p>Add</p>
          </Link>
          <Link to="/users/about">
            <p>About</p>
          </Link>
        </div>
      </nav>
      <div>
        <div class="routes">
          <Route path="/users/:id"><CardDetails /></Route>
          <Route path="/users/about"><About /></Route>
          <Route path="/users/list/"><Users /></Route>
          <Route path="/users/add/"><AddUser /></Route>
          <Route path="/users/"><Home /></Route>
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
    background-color: rgba(222, 223, 225, 0.126);
    margin-bottom: 2rem;
  }

  .links {
    font-size: 25px;
  }

  h1 {
    font-size: 40px;
  }

  .links {
    display: flex;
    gap: 1rem;
  }
  p {
    transition: all 350ms ease-in;
  }

  p:hover {
    color: red;
  }

  .routes {
    padding: 2rem;
  }
</style>
