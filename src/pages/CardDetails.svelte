<script>
  import { onMount } from "svelte"
  import { Link } from "svelte-routing"
  import { UserStore } from "../stores/UserStore"
  import BASE_URL from "../globalVariable"

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
      user = users.find((user) => user._id == id)
    })
    return unsubscribe
  })

  $: avatar = `https://i.pravatar.cc/80?u=${user.email}`

  $: details = user.description
    ? user.description
    : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt minima iste tempora, quibusdam aliquam sint dolor mollitia nam optio ullam quasi porro quisquam vitae consequuntur totam consectetur possimus beatae assumenda! Delectus, quasi culpa? Impedit enim sed nulla non obcaecati voluptas nesciunt beatae, eveniet facilis nostrum nisi, mollitia aliquid animi dolore aspernatur minima distinctio dolorem dolores natus officia! Dolorum eaque recusandae consectetur! Hic culpa illum et neque repudiandae ipsa quaerat eius. Eius a officiis nesciunt hic nemo, in dicta perferendis cum quisquam praesentium asperiores ab eaque vitae nulla debitis minus laudantium veritatis explicabo odit unde eligendi totam, aliquam recusandae quod! Voluptas`

  let isEditMode = false

  function enterEditMode() {
    isEditMode = true
  }

  function cancelEditMode() {
    isEditMode = false
  }

  async function saveChanges() {
    // Create an object with the description field to update
    const updatedFields = {
      description: user.description,
    }

    const response = await fetch(
      `${BASE_URL}/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify(updatedFields), // Send only the updated description field
      },
    )

    if (response.ok) {
      console.log("Data successfully updated!")
      isEditMode = false // Exit edit mode after successful update
    } else {
      console.log("Error updating data")
    }
  }

  async function deleteUser() {
    // Make the API request to delete the user
    const response = await fetch(
      `${BASE_URL}/${user._id}`,
      {
        method: "DELETE",
      },
    )

    if (response.ok) {
      console.log("User successfully deleted!")
      // You can redirect to another page or update the user list here if needed
    } else {
      console.log("Error deleting user")
    }
  }
</script>

<div class="card-details">
  {#if user.first_name}
    <h1>{user.first_name} {user.last_name}</h1>
    <div class="card">
      <div class="top">
        <div class="avatar">
          {#if user}
            <img src={avatar} alt="avatar" />
          {:else}
            <h3>{user.first_name[0]} {user.last_name[0]}</h3>
          {/if}
        </div>
        <div class="text">
          <h4>Age: {user.age}</h4>
          <h4 class="city">Location: {user.city}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <div class="bottom">
        <div class="details">
          {#if isEditMode}
            <div class="inputs">
              <label>
                <textarea bind:value={user.description} />
              </label>
            </div>
            <div class="buttons">
              <!-- Show the "Save" and "Cancel" buttons in edit mode -->
              <button on:click={saveChanges}>Save</button>
              <button on:click={cancelEditMode}>Cancel</button>
            </div>
          {:else}
            <p>
              {details}
            </p>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <p>Something went wrong... 🙄</p>
  {/if}
  <div class="buttons">
    <div class="left">
      <Link to="/users/list/">
        <button>Go Back</button>
      </Link>
    </div>
    <div class="right">
      <button on:click={enterEditMode}>Edit</button>
      <Link to="/users/list/">
        <button class="delete" on:click={deleteUser}>Delete</button>
      </Link>
    </div>
  </div>
</div>

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

  textarea {
    border: none;
    outline: none;
    font-size: 1.25rem;
    color: var(--color-grey);
    background-color:rgba(194, 189, 189, 0.116);
    padding: 2rem;
    text-align: justify;
    border-radius: 10px;
    width: 60vw;
    height:40vh;
    margin: 0 2rem;
    
  }
  .card-details {
    text-align: center;
    /* font-family: "Roboto", sans-serif; */
    padding: 1.2rem;
    border-radius: 6px;
    background-color: #eff2f5;
    color: #333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-bottom: 2.5rem;
    text-align: center;
    border-bottom: 5px solid var(--color-teal);
    /* outline: 1px solid var(--color-indigo); */
   
    padding: 2rem 6rem;
  }

  .card-details:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .card {
    display: flex;
    justify-content: center;
    /* border: 1px solid; */
  }

  .details p {
    font-size: 1.25rem;
    color: var(--color-grey);
    padding: 2rem;
    text-align: justify;
  }

  .top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    /* margin: 2rem; */
    position: relative;
    height: 100%;

    /* border: 1px solid; */
  }
  .top .avatar {
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-teal);
  }

  .top h3,
  .top img {
    background-color: var(--color-teal);
    color: white;
    height: 180px;
    aspect-ratio: 1;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    font-size: 30px;
   

    outline: 3.5px solid var(--color-green);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 24px 35px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .top .text {
    display: flex;
    flex-direction: column;
    text-align: justify;
    font-size: 15px;
  }


  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .delete {
    background-color: var(--color-red);
  }

 
</style>
