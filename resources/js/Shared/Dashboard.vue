<template>
  <div class="relative h-screen flex overflow-hidden bg-gray-100">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <Logo class="h-8 w-auto text-indigo-600" alt="Cloud" />
              <span class="pl-1 font-semibold font-sans text-indigo-800"
                >Cloud</span
              >
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <div class="space-y-1">
                  <div v-for="item in navigation" :key="item.name">
                    <Link
                      :href="item.href"
                      :class="[
                        $page.component.startsWith(item.component)
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                        'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md',
                      ]"
                      :aria-current="
                        $page.component.startsWith(item.component)
                          ? 'page'
                          : undefined
                      "
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          $page.component.startsWith(item.component)
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6',
                        ]"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </Link>
                    <div class="flex flex-col space-y-1 my-2 ml-6">
                      <Link
                        v-for="subItem in item.submenu"
                        :key="subItem.name"
                        :href="subItem.href"
                        :class="[
                          $page.component.startsWith(subItem.component)
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        ]"
                        :aria-current="
                          $page.component.startsWith(subItem.component)
                            ? 'page'
                            : undefined
                        "
                      >
                        <component
                          :is="subItem.icon"
                          :class="[
                            $page.component.startsWith(subItem.component)
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-5 w-5',
                          ]"
                          aria-hidden="true"
                        />
                        {{ subItem.name }}
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <h3
                    id="mobile-teams-headline"
                    class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    Teams
                  </h3>
                  <div
                    class="space-y-1"
                    role="group"
                    aria-labelledby="mobile-teams-headline"
                  >
                    <a
                      v-for="team in teams"
                      :key="team.name"
                      :href="team.href"
                      class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span
                        :class="[
                          team.bgColorClass,
                          'w-2.5 h-2.5 mr-4 rounded-full',
                        ]"
                        aria-hidden="true"
                      />
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
        <div class="flex items-center justify-center flex-shrink-0 px-6">
          <Logo class="h-8 w-auto text-indigo-600" alt="Cloud" />
          <span class="pl-1 font-semibold font-sans text-indigo-800"
            >Cloud</span
          >
        </div>
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- User account dropdown -->
          <Menu as="div" class="px-3 mt-6 relative inline-block text-left">
            <div>
              <MenuButton
                class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
              >
                <span class="flex w-full justify-between items-center">
                  <span
                    class="flex min-w-0 items-center justify-between space-x-3"
                  >
                    <img
                      class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      alt=""
                    />
                    <span class="flex-1 flex flex-col min-w-0">
                      <span
                        class="text-gray-900 text-sm font-medium truncate"
                        >{{ $page.props.auth.user.name }}</span
                      >
                      <span class="text-gray-500 text-sm truncate"
                        >@jessyschwarz</span
                      >
                    </span>
                  </span>
                  <SelectorIcon
                    class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >View profile</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Settings</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Notifications</a
                    >
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Get desktop app</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Support</a
                    >
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Logout</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <nav class="px-3 mt-6">
            <div class="space-y-2">
              <div v-for="item in navigation" :key="item.name">
                <Link
                  :href="item.href"
                  :class="[
                    $page.component.startsWith(item.component)
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                  :aria-current="
                    $page.component.startsWith(item.component)
                      ? 'page'
                      : undefined
                  "
                >
                  <component
                    :is="item.icon"
                    :class="[
                      $page.component.startsWith(item.component)
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </Link>
                <div
                  v-if="item.submenu || false"
                  class="flex flex-col space-y-2 my-2 ml-6"
                >
                  <Link
                    v-for="subItem in item.submenu"
                    :key="subItem.name"
                    :href="subItem.href"
                    :class="[
                      $page.component.startsWith(subItem.component)
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                    ]"
                    :aria-current="
                      $page.component.startsWith(subItem.component)
                        ? 'page'
                        : undefined
                    "
                  >
                    <component
                      :is="subItem.icon"
                      :class="[
                        $page.component.startsWith(subItem.component)
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-5 w-5',
                      ]"
                      aria-hidden="true"
                    />
                    {{ subItem.name }}
                  </Link>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h3
                id="desktop-teams-headline"
                class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Departments
              </h3>
              <div
                class="mt-1 space-y-1"
                role="group"
                aria-labelledby="desktop-teams-headline"
              >
                <a
                  v-for="team in teams"
                  :key="team.name"
                  :href="team.href"
                  class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span
                    :class="[
                      team.bgColorClass,
                      'w-2.5 h-2.5 mr-4 rounded-full',
                    ]"
                    aria-hidden="true"
                  />
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
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div
        class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden"
      >
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 flex justify-end px-4 sm:px-6 lg:px-8">
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >View profile</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Settings</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Notifications</a
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Get desktop app</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Support</a
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Logout</a
                      >
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
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  GlobeAltIcon,
  HomeIcon,
  MenuAlt1Icon,
  XIcon,
  ServerIcon,
  CubeIcon,
} from "@heroicons/vue/outline";
import {
  CogIcon,
  SearchIcon,
  SelectorIcon,
  UserIcon,
} from "@heroicons/vue/solid";
import Logo from "@/Shared/Logo";

const navigation = [
  {
    name: "Dashboard",
    href: route("dashboard.index"),
    icon: HomeIcon,
    component: "Dashboard/Home",
  },
  {
    name: "Users",
    href: route("dashboard.users.index"),
    icon: UserIcon,
    component: "Dashboard/Users",
  },
  {
    name: "Sites",
    href: route("dashboard.sites.index"),
    icon: GlobeAltIcon,
    component: "Dashboard/Sites",
    submenu: [
      {
        name: "Servers",
        href: route("dashboard.sites.servers.index"),
        icon: ServerIcon,
        component: "Dashboard/Sites/Servers",
      },
      {
        name: "Stacks",
        href: route("dashboard.sites.stacks.index"),
        icon: CubeIcon,
        component: "Dashboard/Sites/Stacks",
      },
    ],
  },
  {
    name: "Settings",
    href: route("dashboard.settings.index"),
    icon: CogIcon,
    component: "Dashboard/Settings",
  },
];
const teams = [
  { name: "Engineering", href: "#", bgColorClass: "bg-indigo-500" },
  { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  { name: "Legal", href: "#", bgColorClass: "bg-yellow-500" },
];

const sidebarOpen = ref(false);
</script>
