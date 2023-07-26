<script>
  import BASE_URL from "../globalVariable"

  // Define the user object with initial values
  let user = {
    age: 0,
    avatar: "",
    city: "",
    email: "",
    first_name: "",
    last_name: "",
  }

  let error = ""
  let done = ""

  $: setInterval(() => {
    error = ""
  }, 5000)

  $: setInterval(() => {
    done = ""
  }, 5000)

  async function postData() {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })

    if (response.ok) {
      console.log("Data successfully posted!")
      error = ""
      done = "Data successfully posted!"
    } else {
      error = "Error posting data"
      done = ""
      console.log("Error posting data")
    }
  }

  function submitForm(event) {
    event.preventDefault()
    if (!error) {
      postData()
      user = {
        age: 0,
        avatar: "",
        city: "",
        email: "",
        first_name: "",
        last_name: "",
      }
    }
  }

  function addRandomData() {
    const randomId = Math.floor(Math.random() * 100000)
    user = {
      age: Math.floor(Math.random() * 50) + 20,
      avatar: `https://i.pravatar.cc/80?u=${this.email}`,
      city: "Random City",
      email: `random${randomId}@example.com`,
      first_name: `first${randomId}`,
      last_name: `last${randomId}`,
    }
  }
</script>

<main>
  {#if error}
    <div class="error">{error}</div>
  {/if}
  {#if done}
    <div class="done">{done}</div>
  {/if}

  <form class="form">
    <label>
      First Name:
      <input type="text" bind:value={user.first_name} />
    </label>
    <label>
      Last Name:
      <input type="text" bind:value={user.last_name} />
    </label>
    <label>
      Age:
      <input type="number" bind:value={user.age} />
    </label>
    <label>
      City:
      <input type="text" bind:value={user.city} />
    </label>
    <label>
      Email:
      <input type="email" bind:value={user.email} />
    </label>
    <button on:click={submitForm}>Submit</button>
  </form>
  <button on:click={addRandomData}>Add Random Data</button>
</main>

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

  .error,
  .done {
    background-color: #e91e62ca;
    padding: 0.2rem 2rem;
    margin: 0.5rem;
    color: white;
    border-radius: 4px;
    opacity: 0.6;
    position: absolute;
    top: 17%;
  }

  .done {
    background-color: #34a853;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    padding: 0.2rem 1rem;
    /* border: 1px solid #ccc; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 6px;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    cursor: pointer;
    background-color: var(--color-blue);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--color-teal);
  }

  .form input[type="text"],
  .form input[type="number"],
  .form input[type="email"] {
    font-size: 1.25rem;
    color: var(--color-grey);
    /* padding: 1rem; */
    border: none;
    outline: none;
    background-color: #eff2f5;
    border-bottom: 1px solid var(--color-teal);
  }
</style>
