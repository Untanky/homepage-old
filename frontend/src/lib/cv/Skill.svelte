<script lang="ts" context="module">
  export interface Skill {
    label: string;
    value: number;
  }
</script>

<script lang="ts">
  export let skill: Skill;
</script>

<div class="flex flex-col items-start justify-between space-y-1">
  <div>{ skill.label }</div>
  <div class="w-full bg-sky-200 rounded-full h-2.5">
    <div class="bg-sky-700 h-2.5 rounded-full" style:width={skill.value * 100 + '%'}></div>
  </div>
</div>
