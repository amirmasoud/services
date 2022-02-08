<template>
  <!-- Page title & actions -->
  <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
    <div class="flex-1 min-w-0">
      <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4">
      <slot name="buttons"></slot>
      <!--      <button type="button" class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0">-->
      <!--        Share-->
      <!--      </button>-->
      <!--      <button type="button" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">-->
      <!--        Create-->
      <!--      </button>-->
    </div>
  </div>

  <!-- Pinned projects -->
  <div class="px-4 mt-6 sm:px-6 lg:px-8">
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
      <slot name="sub-header"></slot>
    </h2>

    <slot name="sub-header-content"></slot>
<!--    <ul role="list" class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">-->
<!--      <li v-for="project in pinnedProjects" :key="project.id" class="relative col-span-1 flex shadow-sm rounded-md">-->
<!--        <div :class="[project.bgColorClass, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']">-->
<!--          {{ project.initials }}-->
<!--        </div>-->
<!--        <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">-->
<!--          <div class="flex-1 px-4 py-2 text-sm truncate">-->
<!--            <a href="#" class="text-gray-900 font-medium hover:text-gray-600">-->
<!--              {{ project.title }}-->
<!--            </a>-->
<!--            <p class="text-gray-500">{{ project.totalMembers }} Members</p>-->
<!--          </div>-->
<!--          <Menu as="div" class="flex-shrink-0 pr-2">-->
<!--            <MenuButton class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">-->
<!--              <span class="sr-only">Open options</span>-->
<!--              <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />-->
<!--            </MenuButton>-->
<!--            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">-->
<!--              <MenuItems class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">-->
<!--                <div class="py-1">-->
<!--                  <MenuItem v-slot="{ active }">-->
<!--                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View</a>-->
<!--                  </MenuItem>-->
<!--                </div>-->
<!--                <div class="py-1">-->
<!--                  <MenuItem v-slot="{ active }">-->
<!--                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Removed from pinned</a>-->
<!--                  </MenuItem>-->
<!--                  <MenuItem v-slot="{ active }">-->
<!--                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Share</a>-->
<!--                  </MenuItem>-->
<!--                </div>-->
<!--              </MenuItems>-->
<!--            </transition>-->
<!--          </Menu>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
  </div>

  <slot />
  <!-- Projects list (only on smallest breakpoint) -->
<!--  <div class="mt-10 sm:hidden">-->
<!--    <div class="px-4 sm:px-6">-->
<!--      <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>-->
<!--    </div>-->
<!--    <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">-->
<!--      <li v-for="project in projects" :key="project.id">-->
<!--        <a href="#" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">-->
<!--                <span class="flex items-center truncate space-x-3">-->
<!--                  <span :class="[project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full']" aria-hidden="true" />-->
<!--                  <span class="font-medium truncate text-sm leading-6">-->
<!--                    {{ project.title }}-->
<!--                    {{ ' ' }}-->
<!--                    <span class="truncate font-normal text-gray-500">in {{ project.team }}</span>-->
<!--                  </span>-->
<!--                </span>-->
<!--          <ChevronRightIcon class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->

<!--  &lt;!&ndash; Projects table (small breakpoint and up) &ndash;&gt;-->
<!--  <div class="hidden mt-8 sm:block">-->
<!--    <div class="align-middle inline-block min-w-full border-b border-gray-200">-->
<!--      <table class="min-w-full">-->
<!--        <thead>-->
<!--        <tr class="border-t border-gray-200">-->
<!--          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">-->
<!--            <span class="lg:pl-2">Project</span>-->
<!--          </th>-->
<!--          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">-->
<!--            Members-->
<!--          </th>-->
<!--          <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">-->
<!--            Last updated-->
<!--          </th>-->
<!--          <th class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody class="bg-white divide-y divide-gray-100">-->
<!--        <tr v-for="project in projects" :key="project.id">-->
<!--          <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">-->
<!--            <div class="flex items-center space-x-3 lg:pl-2">-->
<!--              <div :class="[project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full']" aria-hidden="true" />-->
<!--              <a href="#" class="truncate hover:text-gray-600">-->
<!--                        <span>-->
<!--                          {{ project.title }}-->
<!--                          {{ ' ' }}-->
<!--                          <span class="text-gray-500 font-normal">in {{ project.team }}</span>-->
<!--                        </span>-->
<!--              </a>-->
<!--            </div>-->
<!--          </td>-->
<!--          <td class="px-6 py-3 text-sm text-gray-500 font-medium">-->
<!--            <div class="flex items-center space-x-2">-->
<!--              <div class="flex flex-shrink-0 -space-x-1">-->
<!--                <img v-for="member in project.members" :key="member.handle" class="max-w-none h-6 w-6 rounded-full ring-2 ring-white" :src="member.imageUrl" :alt="member.name" />-->
<!--              </div>-->
<!--              <span v-if="project.totalMembers > project.members.length" class="flex-shrink-0 text-xs leading-5 font-medium">+{{ project.totalMembers - project.members.length }}</span>-->
<!--            </div>-->
<!--          </td>-->
<!--          <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">-->
<!--            {{ project.lastUpdated }}-->
<!--          </td>-->
<!--          <td class="pr-6">-->
<!--            <Menu as="div" class="relative flex justify-end items-center">-->
<!--              <MenuButton class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">-->
<!--                <span class="sr-only">Open options</span>-->
<!--                <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />-->
<!--              </MenuButton>-->
<!--              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">-->
<!--                <MenuItems class="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">-->
<!--                  <div class="py-1">-->
<!--                    <MenuItem v-slot="{ active }">-->
<!--                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">-->
<!--                        <PencilAltIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />-->
<!--                        Edit-->
<!--                      </a>-->
<!--                    </MenuItem>-->
<!--                    <MenuItem v-slot="{ active }">-->
<!--                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">-->
<!--                        <DuplicateIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />-->
<!--                        Duplicate-->
<!--                      </a>-->
<!--                    </MenuItem>-->
<!--                    <MenuItem v-slot="{ active }">-->
<!--                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">-->
<!--                        <UserAddIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />-->
<!--                        Share-->
<!--                      </a>-->
<!--                    </MenuItem>-->
<!--                  </div>-->
<!--                  <div class="py-1">-->
<!--                    <MenuItem v-slot="{ active }">-->
<!--                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">-->
<!--                        <TrashIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />-->
<!--                        Delete-->
<!--                      </a>-->
<!--                    </MenuItem>-->
<!--                  </div>-->
<!--                </MenuItems>-->
<!--              </transition>-->
<!--            </Menu>-->
<!--          </td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
<!--  </div>-->
</template>
