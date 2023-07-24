<script>
  import heroImage from "../assets/hero.png"
  import { Link } from "svelte-routing"
</script>

<section class="hero-section">
  <div class="description">
    <h1>Welcome to WebPro</h1>
    <p>
      We have a curated list of the best people in software engineering and web
      development. Whether you're looking for talented developers, designers, or
      tech enthusiasts, you've come to the right place.
    </p>
    <div class="buttons">
      <Link to="/users/list/">
        <button>View List</button>
      </Link>
    </div>
  </div>
  <div class="image">
    <img src={heroImage} alt="" />
  </div>
</section>

<style>
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f9f9f9;
  }

  .description {
    flex: 1;
    max-width: 50%;
  }

  .description h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .description p {
    font-size: 1.4rem;
    color: #666;
  }

  .image {
    flex: 1;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image img {
    width: 70%;
    height: auto;
    border-radius: 8px;
  }

  .buttons {
    display: flex;
    widows: 100%;
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
</style>
