<script setup>
import { ref, provide, onMounted } from 'vue';
import AccordionItem from '@/Components/AccordionItem.vue';

const props = defineProps({
    content: {
      type: Array,
      required: true
    }
})

const parentContainer = ref(null);

const groupId = ref(null);

onMounted(() => {
  groupId.value = Math.random().toString(36).substr(2, 9); // Generate a unique id or use some other unique value logic
});

// Toggle method for managing active state of items
const toggleMethod = (currentItem, targetId) => {
  props.content.forEach((item) => {
    // Check if the item's id matches the target id, toggle its active state accordingly
    if (`${groupId.value}-${item.id}` === targetId) {
      item.active = !item.active;
    } else if (!props.multiple) {
      item.active = false;
    }
  });
};

// Provide the toggle method to child components
provide('toggleMethod', toggleMethod);

</script>

<template>
  <dl ref="accordionItems" class="accordion box" role="presentation">
      <accordion-item
        v-for="item in content"
        :item="item"
        :groupId="groupId"
        @toggle="handleToggle"
        :key="item.id">
      </accordion-item>
    </dl>
</template>
