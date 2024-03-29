<template>
  <div>
    <TransitionRoot :show="sidebarOpen" as="template">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                         enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                         leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75"/>
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                           enter-from="-translate-x-full" enter-to="translate-x-0"
                           leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                           leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                               enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                               leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                      class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      type="button"
                      @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" class="h-6 w-6 text-white"/>
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img alt="Your Company" class="h-8 w-auto"
                       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
                </div>
                <nav class="mt-5 space-y-1 px-2">
                  <a v-for="item in navigation" :key="item.name"
                     :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']"
                     :href="item.href">
                    <component :is="item.icon"
                               :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']"
                               aria-hidden="true"/>
                    {{ item.name }}
                  </a>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a class="group block flex-shrink-0" href="#">
                  <div class="flex items-center">
                    <div>
                      <img alt=""
                           class="inline-block h-10 w-10 rounded-full"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        {{ $page.props.auth.user.name }}</p>
                      <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div class="flex flex-shrink-0 items-center px-4">
            <img alt="Your Company" class="h-8 w-auto"
                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
          </div>
          <nav class="mt-5 flex-1 space-y-1 bg-white px-2">
            <a v-for="item in navigation" :key="item.name"
               :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
               :href="item.href">
              <component :is="item.icon"
                         :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                         aria-hidden="true"/>
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
          <a class="group block w-full flex-shrink-0" href="#">
            <div class="flex items-center">
              <div>
                <img alt=""
                     class="inline-block h-9 w-9 rounded-full"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{{
                    $page.props.auth.user.name
                  }}</p>
                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-64">
      <div class="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
        <button
            class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            type="button"
            @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Home</h1>
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <slot/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  Bars3Icon,
  BellAlertIcon,
  BookOpenIcon,
  CalculatorIcon,
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  CommandLineIcon,
  CpuChipIcon,
  EnvelopeIcon,
  FilmIcon,
  GlobeAltIcon,
  HomeModernIcon,
  InboxIcon,
  KeyIcon,
  MusicalNoteIcon,
  PencilIcon,
  PhotoIcon,
  PuzzlePieceIcon,
  SunIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  {name: 'Home', href: '#', icon: HomeModernIcon, current: true},
  {name: 'Mail', href: '#', icon: EnvelopeIcon, current: false},
  {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
  {name: 'Documents', href: '#', icon: InboxIcon, current: false},
  {name: 'Music', href: '#', icon: MusicalNoteIcon, current: false},
  {name: 'Photos', href: '#', icon: PhotoIcon, current: false},
  {name: 'Videos', href: '#', icon: FilmIcon, current: false},
  {name: 'Books', href: '#', icon: BookOpenIcon, current: false},
  {name: 'Browser', href: '#', icon: GlobeAltIcon, current: false},
  {name: 'Contacts', href: '#', icon: UsersIcon, current: false},
  {name: 'Reminders', href: '#', icon: BellAlertIcon, current: false},
  {name: 'Notes', href: '#', icon: PencilIcon, current: false},
  {name: 'IRC', href: '#', icon: ChatBubbleBottomCenterTextIcon, current: false},
  {name: 'Terminal', href: '#', icon: CommandLineIcon, current: false},
  {name: 'Secrets', href: '#', icon: KeyIcon, current: false},
  {name: 'Finance', href: '#', icon: BanknotesIcon, current: false},
  {name: 'Stocks', href: '#', icon: ArrowTrendingUpIcon, current: false},
  {name: 'Calculator', href: '#', icon: CalculatorIcon, current: false},
  {name: 'Clock', href: '#', icon: ClockIcon, current: false},
  {name: 'Weather', href: '#', icon: SunIcon, current: false},
  {name: 'Games', href: '#', icon: PuzzlePieceIcon, current: false},
  {name: 'Resources', href: '#', icon: CpuChipIcon, current: false},
  {name: 'Settings', href: '#', icon: WrenchScrewdriverIcon, current: false},
]

const sidebarOpen = ref(false)
</script>