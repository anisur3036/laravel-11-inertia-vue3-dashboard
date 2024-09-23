<script setup>
import { inject } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },
});

const toggle = inject('toggleMethod');

// console.log(Array.from(parentInstance.parent.refs[0].accordionItems))


const toggleItem = (event) => {
  // Call the parent's toggle method with the current item's ID
  toggle(props.item, event.currentTarget.parentElement.parentElement.id);
};

const startTransition = (el) => {
  el.style.height = el.scrollHeight + 'px';
};

const endTransition = (el) => {
  el.style.height = '';
};

</script>


<template>
  <div :id="`${groupId}-${item.id}`" class="accordion-item" :class="{ 'is-active': item.active }">
    <dt class="accordion-item-title">
      <button @click="toggleItem" class="accordion-item-trigger">
        <h4 class="accordion-item-title-text">{{ item.title }}</h4>
        <span class="accordion-item-trigger-icon"></span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition">
      <dd v-if="item.active" class="accordion-item-details">
        <div v-html="item.details" class="accordion-item-details-inner"></div>
      </dd>
    </transition>
  </div>
</template>


<style>

</style>
