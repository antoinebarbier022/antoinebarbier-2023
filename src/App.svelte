<script lang="ts">
  import svelteLogo from "./assets/image00001.png";

  import Icons from "./lib/Icons.svelte";
</script>

<main>
  <section id="intro">
    <div class="content">
      <div id="image-name">
        <svg
          class="image"
          width="100%"
          viewBox="0 0 2048 2048"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
        >
          <g id="Layer1">
            <path
              d="M265.489,1698.02C-8.317,1502.26 -13.064,936.485 57.424,748.517C127.912,560.549 225.697,110.397 840.334,60.854C1511.65,6.743 1773.43,246.509 1869.99,355.51C2000.46,502.797 2151.7,1100.18 1881.02,1576.58C1576.28,2112.9 762.504,2053.37 265.489,1698.02Z"
            />
          </g>
          <image
            width="2048"
            height="2048"
            xlink:href={svelteLogo}
            clip-path="url(#myCircle)"
          />
        </svg><span>Antoine Barbier</span>
      </div>
      <h1>Développeur Frontend</h1>
      <p style="max-width:650px; margin: auto;">
        Actuellement chez <a
          href="https://www.frog.co/studio/montpellier"
          target="_blank"
          rel="noreferrer">frog</a
        > à Montpellier, je suis développeur front-end spécialisé dans les frameworks
        Javascript. Je m'intéresse particulièrement à l'univers des Design Systems
        et des web components.
      </p>
      <Icons />
      <div class="links">
        <a class="link link-solid" href="mailto:antoinebarbier022@gmail.com">
          Me contacter
        </a>
        <a
          class="link link-text"
          href="https://github.com/antoinebarbier022"
          target="_blank"
          rel="noreferrer"
        >
          Voir mes projets
        </a>
      </div>
    </div>
  </section>

  <footer>
    <p>
      Site développé avec ♥️ par <a href="https://antoinebarbier.fr"
        >Antoine Barbier</a
      > - 2023
    </p>
  </footer>
</main>

<style>
  main {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  section {
    box-sizing: border-box;
    flex-grow: 1;
    margin: auto;
    padding: 1rem;
    overflow-x: auto;
  }
  #image-name {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  #image-name span {
    font-family: monospace;
    font-weight: bold;
    font-size: 1rem;
  }
  .image {
    width: 40px;
  }
  svg {
    fill: var(--color-text);
  }

  svg path {
    opacity: 0.2;
  }

  h1 {
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
    margin-top: 1em;
    margin-bottom: 2rem;
    letter-spacing: -1px;
  }

  div.links {
    margin: 1rem auto;

    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-content: center;
    gap: 1rem;
  }
  footer {
    display: none;
  }

  @media (min-width: 450px) {
    h1 {
      font-size: 3rem;
      line-height: 3rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    footer {
      display: inline-block;
    }
    section {
      padding: 2rem;
    }
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }
    div.links {
      grid-template-columns: 1fr 1fr;
      max-width: 400px;
    }
    footer p {
      font-size: 1rem;
    }
  }

  p {
    line-height: 1.8rem;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }

  p > a {
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid var(--color-text);
  }

  p > a:active,
  p > a:hover {
    color: var(--color-accent);
    border-bottom: 2px solid var(--color-accent);
  }

  a.link {
    text-decoration: none;
    padding: 2px 1rem;
    font-weight: 600;
    border: 1px solid var(--color-text);
    transition: all 200ms;
  }

  a.link-solid {
    background-color: var(--color-text);
    color: var(--color-background);
  }
  a.link-text {
    color: var(--color-text);
  }

  a.link:hover {
    scale: 1.02;
  }

  section#intro {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    text-align: center;
  }

  p {
    opacity: 0.8;
  }
  footer {
    width: 100%;
  }

  footer p {
    font-size: 0.8rem;
    text-align: center;
    margin: 0.5rem;
    opacity: 1;
  }
  footer a {
    opacity: 1;
  }
</style>
