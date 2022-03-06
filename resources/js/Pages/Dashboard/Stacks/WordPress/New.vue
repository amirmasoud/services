<template>
  <AppHead title="New WordPress Site" />

  <DashboardMain>
    <template #header>Install New WordPress Site</template>

    <TabGroup as="div" class="max-w-screen-xl">
      <TabList class="flex flex-col sm:flex-row flex-wrap relative z-0 justify-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 mb-4">
        <Tab v-slot="{ selected }">
          <button :class="[selected ? 'text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100' : 'text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50', 'flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg']">
            <ServerIcon class="w-3 h-3 mr-2"></ServerIcon><span>Plans</span>
          </button>
        </Tab>
        <Tab v-slot="{ selected }">
          <button :class="[selected ? 'text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100' : 'text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50', 'flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg']">
            <PuzzleIcon class="w-3 h-3 mr-2"></PuzzleIcon><span>Plugins</span>
          </button>
        </Tab>
        <Tab v-slot="{ selected }">
          <button :class="[selected ? 'text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100' : 'text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50', 'flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg']">
            <ViewBoardsIcon class="w-3 h-3 mr-2"></ViewBoardsIcon><span>Themes</span>
          </button>
        </Tab>
        <Tab v-slot="{ selected }">
          <button :class="[selected ? 'text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100' : 'text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50', 'flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg']">
            <TerminalIcon class="w-3 h-3 mr-2"></TerminalIcon><span>Advance</span>
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Plans v-model:selected-config="selectedConfig" v-model:selected-plan="selectedPlan" />
        </TabPanel>
        <TabPanel>
          <Plugins :records="plugins" v-model:selected-plugins="selectedPlugins"/>
        </TabPanel>
        <TabPanel>
          <Themes :records="themes" v-model:selected-theme="selectedTheme" />
        </TabPanel>
        <TabPanel>
          <Advance v-model:entered-commands="enteredCommands" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import Plans from "@/Components/Stacks/WordPress/Plans";
import Plugins from "@/Components/Stacks/WordPress/Plugins";
import Themes from "@/Components/Stacks/WordPress/Themes";
import Advance from "@/Components/Stacks/WordPress/Advance";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { ServerIcon, PuzzleIcon, ViewBoardsIcon, TerminalIcon } from '@heroicons/vue/solid';
import {ref} from "vue";

const selectedConfig = ref("");
const selectedPlan = ref("");
const selectedPlugins = ref({});
const selectedTheme = ref("");
const enteredCommands = ref("");

defineProps({
  plugins: Object,
  themes: Object,
  // 2 more props
});
</script>
