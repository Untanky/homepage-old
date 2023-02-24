<script lang="ts" context="module">
export interface ProfileHero {
  imageUri: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}
</script>

<script lang="ts">
  export let hero: ProfileHero;
</script>

<div class="flex items-center justify-center bg-sky-300 shadow-lg p-16 rounded-[64px] space-x-8">
  <div class="text-right">
    <h1 class="text-6xl font-bold">{hero.title}</h1>
    <h2 class="text-3xl font-medium">{hero.subtitle}</h2>
  </div>
  <div>
    <img src={hero.imageUri} alt="" class="w-[224px] h-[224px] rounded-[64px]" />
  </div>
</div>
