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

<div class="flex flex-col-reverse sm:flex-row items-center justify-center bg-sky-300 md:w-[768px] lg:w-[1024px] shadow-lg p-8 md:p-11 lg:p-16 mx-auto rounded-[64px] space-x-8">
  <div class="text-center sm:text-right">
    <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold">{hero.title}</h1>
    <h2 class="text-lg md:text-xl lg:text-3xl font-medium">{hero.subtitle}</h2>
  </div>
  <div>
    <img src={hero.imageUri} alt="" class="w-[128px] h-[128px] md:w-[172px] md:h-[172px] lg:w-[224px] lg:h-[224px] rounded-[28px] md:rounded-[40px] lg:rounded-[64px]" />
  </div>
</div>
