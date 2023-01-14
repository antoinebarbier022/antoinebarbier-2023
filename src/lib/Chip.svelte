<script lang="ts">
  let checked = false;
  let test = "ah";

  function handleClick() {
    checked = !checked;
    test += "! ah";
  }
</script>

<button role="checkbox" aria-checked={checked} on:click={handleClick}
  ><slot /></button
>

<style>
  button {
    padding: 1px 4px;
    border: 1px solid var(--color-text);
    border-radius: 2px;
  }
  button[aria-checked="false"] {
    background-color: var(--color-background);
    color: var(--color-text);
  }
  button[aria-checked="true"] {
    color: var(--color-background);
    background-color: var(--color-text);
  }
</style>
