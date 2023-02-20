<script lang="ts" context="module">
  export interface Strength {
    label: string;
    description: string;
  };
</script>

<script lang="ts">
  export let strength: Strength;
</script>

<i class="italic">{ strength.label }</i>&MediumSpace;<span> { strength.description } </span>
