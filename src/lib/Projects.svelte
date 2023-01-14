<script lang="ts">
  import Project from "./Project.svelte";
  import { writable } from "svelte/store";
  import Chip from "./Chip.svelte";
  import { projects } from "../data";

  const selectedMultipleTech = writable(new Set<string>());

  let filters: Set<string> = new Set();
  selectedMultipleTech.subscribe((value) => {
    filters = new Set(value);
  });

  const chips = projects.reduce((acc, project) => {
    if (!acc[project.tech]) {
      acc[project.tech] = 1;
    } else {
      acc[project.tech]++;
    }
    return acc;
  }, {});

  function handleTechSelection(event) {
    const tech: string = event.target.value;
    if (event.target.checked) {
      selectedMultipleTech.update((set) => set.add(tech));
    } else {
      selectedMultipleTech.update((set) => {
        set.delete(tech);
        return set;
      });
    }
  }
</script>

<section id="projects">
  <h2>Mes projets ({projects.length})</h2>
  <p>
    Voici une sélection de quelques projets réalisés au cours des dernières
    années.
  </p>
  <div class="chips">
    <Chip>All ({projects.length})</Chip>
    <label>
      <input type="checkbox" value="all" checked={filters.size === 0} />
      All ({projects.length})
    </label>
    {#each Object.entries(chips) as [tech, count]}
      <label>
        <input type="checkbox" value={tech} on:change={handleTechSelection} />
        {tech}
        ({count})
      </label>
    {/each}
  </div>

  <div class="grid-projects">
    {#each projects as project}
      {#if filters.size === 0 || filters.has(project.tech)}
        <Project name={project.name} url={project.url} />
      {:else}
        <Project name={project.name} url={project.url} disabled={true} />
      {/if}
    {/each}
  </div>
</section>

<style>
  h2 {
    font-size: 2rem;
    line-height: normal;
    margin: 0;
  }

  .chips {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1rem 0;
  }

  section#projects p {
    line-height: normal;
  }

  .grid-projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
</style>
