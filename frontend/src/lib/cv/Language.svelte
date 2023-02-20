<script lang="ts" context="module">
  export interface Language {
    language: string;
    level: string;
  };
</script>

<script lang="ts">
  export let language: Language;
</script>

<div class="text-xl">
  <b class="font-medium">{ language.language }</b>:&MediumSpace;<span> { language.level } </span>
</div>
