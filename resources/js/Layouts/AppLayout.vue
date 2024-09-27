<script setup>
import { ref, onBeforeMount } from 'vue';
import {onClickOutside} from '@vueuse/core'
import { Link, usePage } from "@inertiajs/vue3";
import {
  ChevronRightIcon,
  PowerIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";

import MainMenuLinks from "@/Sources/mainMenuLinks";


const {mainMenuLinks, mainMenuFooterLinks} = MainMenuLinks({
    roles: usePage().props.roles,
    permissions: usePage().props.permissions
});

const activeMainLink = ref([null, null, null]);
const open = ref(true);
const submenuOpen = ref(false);

onBeforeMount(() => {
    mainMenuLinks.value.forEach(ml => {
        if (ml.hasOwnProperty('links')) {
            ml.links.find(sl => {
                /*Active Main-link*/
                if(ml.link === route().current()){
                    activeMainLink.value[0] = ml.id
                }

                /*Active Sub-link*/
                if (sl.link === route().current()) {
                    activeMainLink.value[0] = ml.id
                    activeMainLink.value[1] = sl.id
                }

                /*Active Third-link*/
                if (sl.hasOwnProperty('links')) {
                    sl.links.find(tl => {
                        if (tl.link === route().current()) {
                            activeMainLink.value[0] = ml.id
                            activeMainLink.value[1] = sl.id
                            activeMainLink.value[2] = tl.id
                        }
                    })
                }
            })
        }
    })
})

/*Sub-menu - Variables*/
const subMenu = ref(null)
const showSubMenu = ref();

/*Submenu - Visibility*/
onClickOutside(subMenu, (event) => showSubMenu.value = false)

/*Third-menu */
const thirdMenu = ref(null)
onClickOutside(thirdMenu, (event) => activeMainLink.value[2] = null)

  console.log(activeMainLink.value)

</script>


<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <div
      id="sidebar-desktop"
      class="relative p-5 pt-3 h-screen flex flex-col flex-shrink-0 bg-gray-900 dark:bg-gray-900 items-stretch border-gray-900 border-r border-b border-b-0 dark:border-gray-800 duration-300"
      :class="open ? 'w-72' : 'w-20'"
    >
      <div class="inline-flex">
        <PowerIcon class="w-8 h-8 shrink-0 bg-red-600 text-4xl rounded cursor-pointer block float-left mr-2" />
        <h1 class="text-white origin-left font-medium text-2xl duration-300"
        :class="open ? '': 'scale-0'">SKCL</h1>
      </div>

      <!-- Search -->
      <div class="mt-4 py-2 px-2 flex items-center rounded-md bg-gray-800">
        <MagnifyingGlassIcon class="w-4 h-4 text-bg-gray-300" />
      </div>

      <div class="pt-4">
        <div class="space-y-1">
          <template v-for="link in mainMenuLinks" :key="link.id">
            <div
                @click="activeMainLink[0] = link.id"
                class="flex flex-col gap-y-4"
              >
              <div
                v-if="link.type === 'dropdown'"
                class="text-gray-500 cursor-pointer rounded"
              >
                <div class="flex items-center gap-x-2 p-2 rounded"
                  :class="{ 'bg-gray-800 text-gray-300': activeMainLink[0] === link.id }"
                >
                  <!-- Icon -->
                  <component :is="link.icon" class="w-5 h-5 shrink-0" />

                  <!-- Label -->
                  <span v-show="open" class="text-base flex-1 duration-300" v-text="link.label"/>
                  <ChevronRightIcon v-show="open" class="w-4 h-4 text-gray-300 duration-300" :class="open && activeMainLink[0] === link.id ? 'rotate-90' : ''" />

                </div>

                <div v-if="open && activeMainLink[0] === link.id" class="mt-2 ml-2 pl-4 border-l border-gray-800 h-auto duration-300" ref="thirdMenu">
                  <template v-for="subLink in link.links" :key="subLink">

                  <Link
                    v-if="subLink.type === 'route'"
                    :href="route(subLink.link)"
                    :class="subLink.link === route().current() ? 'text-gray-300': ''"
                    class="py-2 px-2 flex items-center gap-x-2 cursor-pointer rounded hover:bg-gray-600"
                    >
                      <!-- Label -->
                    <span v-show="open" class="text-base duration-300" v-text="subLink.label"/>
                  </Link>
                  </template>
                </div>
              </div>

              <Link
                v-if="link.type === 'route'"
                :href="route(link.link)"
                class="py-2 px-2 flex items-center gap-x-2 text-gray-300 cursor-pointer rounded hover:bg-gray-600"
                >

                <!-- Icon -->
                <component v-if="link.icon" :is="link.icon" class="w-4 h-4"/>

                  <!-- Label -->
                <span class="text-base" v-text="link.label"/>
              </Link>
            </div>
          </template>
        </div>
      </div>

    </div>
    <!-- Right Side -->
    <div id="container" class="flex flex-1 bg-gray-900 min-w-0">
      <div class="relative flex flex-col flex-1 items-stretch w-full">
        <!-- top-menu -->
        <div
          class="flex flex-shrink-0 bg-gray-900 justify-between items-center gap-x-4 border-gray-700 px-4 border-b dark:border-gray-800 min-w-0 h-[50px]"
        >
          <div class="flex items-stretch gap-1.5 min-w-0">
            <button
              @click="open = !open"
              class="focus:outline-none focus-visible:outline-0 inline-flex flex-shrink-o items-center gap-x-1.5 hover:bg-gray-500 dark:hover:bg-input p-1.5 rounded-md font-medium text-gray-400 text-sm hover:text-fg-900 dark:hover:text-white dark:text-fg focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-300"
              aria-label="open sidebar"
            >
              <Bars3Icon class="w-5 h-5 text-fg-300" />
            </button>
            <slot name="header" />
          </div>

          <div class="flex items-center gap-2">
            <button
              @click="true"
              type="button"
              class="px-1 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-ring-color"
            >
              <BellAlertIcon class="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        <!-- sub-menu -->
        <div class="sub-header-container border-b dark:border-gray-800">
          <div class="sub-header flex items-center gap-x-4 border-fg px-4 py-1">
            <slot name="sub-header" />
          </div>
        </div>
        <!-- main-content-area -->
        <div
          id="style-3"
          class="flex flex-col flex-1 p-4 dark:text-slate-400 leading-relaxed overflow-y-auto"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
