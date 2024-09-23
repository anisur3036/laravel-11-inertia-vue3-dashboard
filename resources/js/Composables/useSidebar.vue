<script>
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

export function useSidebar() {
  const isSidebarOpen = ref(false)
  // const selected = useStorage('selected', ref('eCommerce'))
  const page = useStorage('page', ref('Dashboard'))

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return { isSidebarOpen, toggleSidebar }
}
</script>
