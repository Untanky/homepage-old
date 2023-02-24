<script lang="ts" context="module">
  export interface Strength {
    label: string;
    description: string;
  };
</script>

<script lang="ts">
  export let strength: Strength;
</script>

<span>{ strength.label }</span>&MediumSpace;<span class="text-gray-600">{ strength.description }</span>
