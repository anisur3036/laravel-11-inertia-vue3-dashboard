<script setup>
import { reactive } from 'vue';
import { Head } from '@inertiajs/vue3';
import Accordion from '@/Components/Accordion.vue'

const example = reactive([
  {
    id: 1,
    active: true,
    title: 'Crushing Spirits',
    details: `
      <p>You can crush me but you can't crush my spirit! Are you crazy? I can't swallow that. Who's brave enough to fly into something we all keep calling a death sphere? It doesn't look so shiny to me.</p>
      <ul>
        <li>I just want to talk.</li>
        <li>It has nothing to do with mating.</li>
        <li>Fry, that doesn't make sense.</li>
      </ul>
    `
  },
  {
    id: 2,
    active: false,
    title: 'Soundtracks',
    details: `
      <p>Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>
    `
  },
  {
    id: 3,
    active: false,
    title: `The Letter Shaped Like a Man's Hat`,
    details: `
      <p>And then the battle's not so bad? You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! Say it in Russian!</p>
      <p>Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.</p>
    `
  }
]);
</script>
<template>
<Head title="Dashboard" />
    <Accordion id="accordion-example-1" :content="example"></Accordion>
</template>


<style>


</style>
