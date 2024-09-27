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
.container {
  margin-bottom: 1.5em;
}

.btn-action-delete {
  color: #cc4b37;
  cursor: pointer;
}

.accordion {
  padding: 0;
}
.accordion div:not(:last-child) {
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
}
.accordion div:last-child .accordion-item-details {
  border-radius: 5px;
}
.accordion dd {
  margin-left: 0;
}

.accordion-item-trigger,
.accordion-item-details-inner {
  padding: 0.75rem 1.25rem;
}

.accordion-item-title {
  position: relative;
}
.accordion-item-title h4 {
  font-size: 1.25rem;
  margin-bottom: 0;
  padding-right: 1.25rem;
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
}

.accordion-item-trigger-icon {
  display: block;
  position: absolute;
  top: 0;
  right: 1.25rem;
  bottom: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  border-right: 2px solid #363636;
  border-bottom: 2px solid #363636;
  transform: translateY(-2px) rotate(45deg);
  transition: transform 0.2s ease;
}
.is-active .accordion-item-trigger-icon {
  transform: translateY(2px) rotate(225deg);
}

.accordion-item-details {
  overflow: hidden;
  background-color: whitesmoke;
}

.accordion-item-enter-active, .accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}

.accordion-item-enter, .accordion-item-leave-to {
  height: 0 !important;
}

</style>
