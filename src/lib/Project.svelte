<script lang="ts">
  export let name: string;
  export let url: string;
  export let disabled: boolean = false;
</script>

<a href={url} target="_blank" rel="noreferrer" class={disabled && "disabled"}>
  <span>{name}</span>
</a>

<style>
  .disabled {
    opacity: 0.3;
  }
  a {
    text-decoration: none;
    color: var(--color-text);
    width: 100%;
    height: 100px;
    border: 2px solid var(--color-text);
    padding: 1rem;
    border-radius: 2px;
  }
  a:hover {
    color: var(--color-background);
    background-color: var(--color-text);
  }
</style>
