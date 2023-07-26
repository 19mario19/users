<script>
  // Import required modules
  import { Link } from "svelte-routing"

  // Define the description for the website
  const description = `Welcome to our website! We are proud to present a list of the best people in software engineering and web development. Our mission is to showcase the incredible talents and skills of individuals who have made significant contributions to the tech industry. Join us in celebrating the brilliance of these amazing professionals.`
</script>

<div class="about">
  <h1>About Us</h1>
  <p>{description}</p>
  <Link to="/users/list/">
    <button> Explore Our List </button>
  </Link>
</div>

<style>
  .about {
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    color: var(--color-blue);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #444;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    text-align: justify;
  }

</style>
