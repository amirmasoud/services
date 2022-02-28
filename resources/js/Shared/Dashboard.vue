<template>
  <div class="relative h-screen flex overflow-hidden bg-gray-100">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <Logo class="h-8 w-auto text-indigo-600" alt="WordPress Cloud" />
              <span class="pl-2 font-thin font-sans text-indigo-800">WordPress</span>
              <span class="pl-1 font-semibold font-sans text-indigo-800">Cloud</span>
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <div class="space-y-1">
                  <Link
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[$page.component.startsWith(item.component) ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md']"
                    :aria-current="$page.component.startsWith(item.component) ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      :class="[$page.component.startsWith(item.component) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </Link>
                </div>
                <div class="mt-8">
                  <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="mobile-teams-headline">
                    Teams
                  </h3>
                  <div class="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
                    <a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                      <span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
                      <span class="truncate">
                        {{ team.name }}
                      </span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64 pt-5 pb-4 bg-gray-100">
        <div class="flex items-center flex-shrink-0 px-6">
          <Logo class="h-8 w-auto text-indigo-600" alt="WordPress Cloud" />
          <span class="pl-2 font-thin font-sans text-indigo-800">WordPress</span>
          <span class="pl-1 font-semibold font-sans text-indigo-800">Cloud</span>
        </div>
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- User account dropdown -->
          <Menu as="div" class="px-3 mt-6 relative inline-block text-left">
            <div>
              <MenuButton class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                <span class="flex w-full justify-between items-center">
                  <span class="flex min-w-0 items-center justify-between space-x-3">
                    <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
                    <span class="flex-1 flex flex-col min-w-0">
                      <span class="text-gray-900 text-sm font-medium truncate">{{ $page.props.auth.user.name }}</span>
                      <span class="text-gray-500 text-sm truncate">@jessyschwarz</span>
                    </span>
                  </span>
                  <SelectorIcon class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </span>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <!-- Sidebar Search -->
          <div class="px-3 mt-5">
            <label for="search" class="sr-only">Search</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
                <SearchIcon class="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input type="text" name="search" id="search" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md" placeholder="Search" />
            </div>
          </div>
          <!-- Navigation -->
          <nav class="px-3 mt-6">
            <div class="space-y-1">
              <Link
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[$page.component.startsWith(item.component) ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
                :aria-current="$page.component.startsWith(item.component) ? 'page' : undefined"
              >
                <component
                  :is="item.icon"
                  :class="[$page.component.startsWith(item.component) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                  aria-hidden="true"
                />
                {{ item.name }}
              </Link>
            </div>
            <div class="mt-8">
              <!-- Secondary navigation -->
              <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="desktop-teams-headline">
                Departments
              </h3>
              <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
                <a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                  <span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
                  <span class="truncate">
                    {{ team.name }}
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <!-- Main column -->
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <!-- Search header -->
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" name="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search" />
              </div>
            </form>
          </div>
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { GlobeAltIcon, HomeIcon, MenuAlt1Icon, ViewListIcon, XIcon } from '@heroicons/vue/outline'
import {
  ChevronRightIcon,
  CogIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  SearchIcon,
  SelectorIcon,
  TrashIcon,
  UserAddIcon, UserIcon,
} from '@heroicons/vue/solid'
import Logo from "@/Shared/Logo";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, component: 'Dashboard/Home' },
  { name: 'Users', href: '/dashboard/users', icon: UserIcon, component: 'Dashboard/Users' },
  { name: 'Sites', href: '/dashboard/sites', icon: GlobeAltIcon, component: 'Dashboard/Sites' },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon, component: 'Dashboard/Settings' },
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Legal', href: '#', bgColorClass: 'bg-yellow-500' },
]
const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)
const sidebarOpen = ref(false)

// export default {
//   setup() {
//     const sidebarOpen = ref(false)
//
//     return {
//       navigation,
//       teams,
//       projects,
//       pinnedProjects,
//       sidebarOpen,
//     }
//   },
// }
</script>

<!--<template>-->
<!--  <div class="flex overflow-hidden h-screen bg-gray-100">-->
<!--    <TransitionRoot-->
<!--      as="template"-->
<!--      :show="sidebarOpen"-->
<!--    >-->
<!--      <Dialog-->
<!--        as="div"-->
<!--        class="flex md:hidden fixed inset-0 z-40"-->
<!--        @close="sidebarOpen = false"-->
<!--      >-->
<!--        <TransitionChild-->
<!--          as="template"-->
<!--          enter="transition-opacity ease-linear duration-300"-->
<!--          enter-from="opacity-0"-->
<!--          enter-to="opacity-100"-->
<!--          leave="transition-opacity ease-linear duration-300"-->
<!--          leave-from="opacity-100"-->
<!--          leave-to="opacity-0"-->
<!--        >-->
<!--          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />-->
<!--        </TransitionChild>-->
<!--        <TransitionChild-->
<!--          as="template"-->
<!--          enter="transition ease-in-out duration-300 transform"-->
<!--          enter-from="-translate-x-full"-->
<!--          enter-to="translate-x-0"-->
<!--          leave="transition ease-in-out duration-300 transform"-->
<!--          leave-from="translate-x-0"-->
<!--          leave-to="-translate-x-full"-->
<!--        >-->
<!--          <div class="flex relative flex-col flex-1 pt-5 pb-4 w-full max-w-xs bg-indigo-700">-->
<!--            <TransitionChild-->
<!--              as="template"-->
<!--              enter="ease-in-out duration-300"-->
<!--              enter-from="opacity-0"-->
<!--              enter-to="opacity-100"-->
<!--              leave="ease-in-out duration-300"-->
<!--              leave-from="opacity-100"-->
<!--              leave-to="opacity-0"-->
<!--            >-->
<!--              <div class="absolute top-0 right-0 pt-2 -mr-12">-->
<!--                <button-->
<!--                  type="button"-->
<!--                  class="flex justify-center items-center ml-1 w-10 h-10 rounded-full focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none"-->
<!--                  @click="sidebarOpen = false"-->
<!--                >-->
<!--                  <span class="sr-only">Close sidebar</span>-->
<!--                  <XIcon-->
<!--                    class="w-6 h-6 text-white"-->
<!--                    aria-hidden="true"-->
<!--                  />-->
<!--                </button>-->
<!--              </div>-->
<!--            </TransitionChild>-->
<!--            <div class="flex flex-shrink-0 items-center px-4 text-white">-->
<!--              <Logo class="w-auto h-8" /><span class="pl-4">WordPress Cloud</span>-->
<!--            </div>-->
<!--            <div class="overflow-y-auto flex-1 mt-5 h-0">-->
<!--              <nav class="px-2 space-y-1">-->
<!--                <Link-->
<!--                  v-for="item in navigation"-->
<!--                  :key="item.name"-->
<!--                  :href="item.href"-->
<!--                  :class="[$page.component.startsWith(item.component) ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']"-->
<!--                >-->
<!--                  <component-->
<!--                    :is="item.icon"-->
<!--                    class="flex-shrink-0 mr-4 w-6 h-6 text-indigo-300"-->
<!--                    aria-hidden="true"-->
<!--                  />-->
<!--                  {{ item.name }}-->
<!--                </Link>-->
<!--              </nav>-->
<!--            </div>-->
<!--          </div>-->
<!--        </TransitionChild>-->
<!--        <div-->
<!--          class="flex-shrink-0 w-14"-->
<!--          aria-hidden="true"-->
<!--        >-->
<!--          &lt;!&ndash; Dummy element to force sidebar to shrink to fit close icon &ndash;&gt;-->
<!--        </div>-->
<!--      </Dialog>-->
<!--    </TransitionRoot>-->

<!--    &lt;!&ndash; Static sidebar for desktop &ndash;&gt;-->
<!--    <div class="hidden md:flex md:flex-shrink-0 bg-indigo-700">-->
<!--      <div class="flex flex-col w-64">-->
<!--        &lt;!&ndash; Sidebar component, swap this element with another sidebar if you like &ndash;&gt;-->
<!--        <div class="flex overflow-y-auto flex-col flex-grow pt-5 pb-4">-->
<!--          <div class="flex flex-shrink-0 items-center px-4 text-white">-->
<!--            <Logo class="w-auto h-8" /><span class="pl-4">WordPress Cloud</span>-->
<!--          </div>-->
<!--          <div class="flex flex-col flex-1 mt-5">-->
<!--            <nav class="flex-1 px-2 space-y-1">-->
<!--              <Link-->
<!--                v-for="item in navigation"-->
<!--                :key="item.name"-->
<!--                :href="item.href"-->
<!--                :class="[$page.component.startsWith(item.component) ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"-->
<!--              >-->
<!--                <component-->
<!--                  :is="item.icon"-->
<!--                  class="flex-shrink-0 mr-3 w-6 h-6 text-indigo-300"-->
<!--                  aria-hidden="true"-->
<!--                />-->
<!--                {{ item.name }}-->
<!--              </Link>-->
<!--            </nav>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="flex overflow-hidden flex-col flex-1 w-0">-->
<!--      <div class="flex relative z-10 flex-shrink-0 h-16 bg-white shadow">-->
<!--        <button-->
<!--          type="button"-->
<!--          class="md:hidden px-4 text-gray-500 border-r border-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none"-->
<!--          @click="sidebarOpen = true"-->
<!--        >-->
<!--          <span class="sr-only">Open sidebar</span>-->
<!--          <MenuAlt2Icon-->
<!--            class="w-6 h-6"-->
<!--            aria-hidden="true"-->
<!--          />-->
<!--        </button>-->
<!--        <div class="flex flex-1 justify-between items-center px-4">-->
<!--          <div class="flex flex-1">-->
<!--            <form-->
<!--              class="flex mb-0 md:ml-0 w-full"-->
<!--              action="#"-->
<!--              method="GET"-->
<!--            >-->
<!--              <label-->
<!--                for="search-field"-->
<!--                class="sr-only"-->
<!--              >Search</label>-->
<!--              <div class="relative w-full text-gray-400 focus-within:text-gray-600">-->
<!--                <div class="flex absolute inset-y-0 left-0 items-center pointer-events-none">-->
<!--                  <SearchIcon-->
<!--                    class="w-5 h-5"-->
<!--                    aria-hidden="true"-->
<!--                  />-->
<!--                </div>-->
<!--                <input-->
<!--                  id="search-field"-->
<!--                  class="block py-2 pr-3 pl-8 w-full h-full sm:text-sm placeholder-gray-500 focus:placeholder-gray-400 text-gray-900 border-transparent focus:border-transparent focus:ring-0 focus:outline-none"-->
<!--                  placeholder="Search"-->
<!--                  type="search"-->
<!--                  name="search"-->
<!--                >-->
<!--              </div>-->
<!--            </form>-->
<!--          </div>-->
<!--          <div class="flex items-center ml-4 md:ml-6">-->
<!--            <button-->
<!--              type="button"-->
<!--              class="p-1 text-gray-400 hover:text-gray-500 bg-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"-->
<!--            >-->
<!--              <span class="sr-only">View notifications</span>-->
<!--              <BellIcon-->
<!--                class="w-6 h-6"-->
<!--                aria-hidden="true"-->
<!--              />-->
<!--            </button>-->

<!--            &lt;!&ndash; Profile dropdown &ndash;&gt;-->
<!--            <Menu-->
<!--              as="div"-->
<!--              class="relative ml-3"-->
<!--            >-->
<!--              <div>-->
<!--                <MenuButton class="flex items-center max-w-xs text-sm bg-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">-->
<!--                  <span class="sr-only">Open user menu</span>-->
<!--                  <img-->
<!--                    class="w-8 h-8 rounded-full"-->
<!--                    src="https://images.unsplash.com/photo-1637921884274-e12c48d7cd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"-->
<!--                    alt=""-->
<!--                  >-->
<!--                </MenuButton>-->
<!--              </div>-->
<!--              <transition-->
<!--                enter-active-class="transition ease-out duration-100"-->
<!--                enter-from-class="transform opacity-0 scale-95"-->
<!--                enter-to-class="transform opacity-100 scale-100"-->
<!--                leave-active-class="transition ease-in duration-75"-->
<!--                leave-from-class="transform opacity-100 scale-100"-->
<!--                leave-to-class="transform opacity-0 scale-95"-->
<!--              >-->
<!--                <MenuItems class="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">-->
<!--                  <MenuItem-->
<!--                    v-for="item in userNavigation"-->
<!--                    :key="item.name"-->
<!--                    v-slot="{ active }"-->
<!--                  >-->
<!--                    <Link-->
<!--                      :href="item.href"-->
<!--                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left']"-->
<!--                      method="post"-->
<!--                      as="button"-->
<!--                    >-->
<!--                      {{ item.name }}-->
<!--                    </Link>-->
<!--                  </MenuItem>-->
<!--                </MenuItems>-->
<!--              </transition>-->
<!--            </Menu>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <main class="overflow-y-auto relative flex-1 focus:outline-none">-->
<!--        <div class="py-6">-->
<!--          <div class="px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">-->
<!--            <slot />-->
<!--          </div>-->
<!--        </div>-->
<!--      </main>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { ref } from 'vue';-->
<!--import {-->
<!--  Dialog,-->
<!--  DialogOverlay,-->
<!--  Menu,-->
<!--  MenuButton,-->
<!--  MenuItem,-->
<!--  MenuItems,-->
<!--  TransitionChild,-->
<!--  TransitionRoot,-->
<!--} from '@headlessui/vue';-->
<!--import {-->
<!--  BellIcon,-->
<!--  CogIcon,-->
<!--  HomeIcon,-->
<!--  MenuAlt2Icon,-->
<!--  UsersIcon,-->
<!--  XIcon,-->
<!--} from '@heroicons/vue/outline';-->
<!--import { SearchIcon } from '@heroicons/vue/solid';-->
<!--import { Link } from "@inertiajs/inertia-vue3";-->
<!--import { Head } from "@inertiajs/inertia-vue3";-->
<!--import Logo from "@/Shared/Logo";-->

<!--const navigation = [-->
<!--  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, component: 'Dashboard/Home' },-->
<!--  { name: 'Users', href: '/dashboard/users', icon: UsersIcon, component: 'Dashboard/Users' },-->
<!--  { name: 'Sites', href: '/dashboard/sites', icon: CogIcon, component: 'Dashboard/Sites' },-->
<!--  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon, component: 'Dashboard/Settings' },-->
<!--];-->
<!--const userNavigation = [-->
<!--  // { name: 'Your Profile', href: '#' },-->
<!--  // { name: 'Settings', href: '#' },-->
<!--  { name: 'Sign out', href: '/logout' },-->
<!--];-->

<!--export default {-->
<!--  components: {-->
<!--    Logo,-->
<!--    Dialog,-->
<!--    DialogOverlay,-->
<!--    Menu,-->
<!--    MenuButton,-->
<!--    MenuItem,-->
<!--    MenuItems,-->
<!--    TransitionChild,-->
<!--    TransitionRoot,-->
<!--    BellIcon,-->
<!--    MenuAlt2Icon,-->
<!--    SearchIcon,-->
<!--    XIcon,-->
<!--    Link,-->
<!--    Head,-->
<!--  },-->
<!--  setup() {-->
<!--    const sidebarOpen = ref(false);-->

<!--    return {-->
<!--      navigation,-->
<!--      userNavigation,-->
<!--      sidebarOpen,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
