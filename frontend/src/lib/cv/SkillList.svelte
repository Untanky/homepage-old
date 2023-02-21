<script lang="ts">
  import type { Skill as SkillModel } from './Skill.svelte';
  import Skill from './Skill.svelte';


  export let skillList: SkillModel[];
</script>

<div class="grid grid-cols-2 gap-x-6 gap-y-4">
  {#each skillList as skill}
    <Skill skill={skill} />
  {/each}
</div>
