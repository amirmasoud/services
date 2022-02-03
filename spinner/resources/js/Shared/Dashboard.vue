<template>
    <Head title="Media" />
    <div class="flex overflow-hidden h-screen bg-gray-100">
        <TransitionRoot
            as="template"
            :show="sidebarOpen"
        >
            <Dialog
                as="div"
                class="flex md:hidden fixed inset-0 z-40"
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
                    <div class="flex relative flex-col flex-1 pt-5 pb-4 w-full max-w-xs bg-indigo-700">
                        <TransitionChild
                            as="template"
                            enter="ease-in-out duration-300"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="ease-in-out duration-300"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="absolute top-0 right-0 pt-2 -mr-12">
                                <button
                                    type="button"
                                    class="flex justify-center items-center ml-1 w-10 h-10 rounded-full focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none"
                                    @click="sidebarOpen = false"
                                >
                                    <span class="sr-only">Close sidebar</span>
                                    <XIcon
                                        class="w-6 h-6 text-white"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex flex-shrink-0 items-center px-4">
                            <img
                                class="w-auto h-8"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                                alt="Workflow"
                            >
                        </div>
                        <div class="overflow-y-auto flex-1 mt-5 h-0">
                            <nav class="px-2 space-y-1">
                                <Link
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :href="item.href"
                                    :class="[$page.url.startsWith(item.href) ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']"
                                >
                                    <component
                                        :is="item.icon"
                                        class="flex-shrink-0 mr-4 w-6 h-6 text-indigo-300"
                                        aria-hidden="true"
                                    />
                                    {{ item.name }}
                                </Link>
                            </nav>
                        </div>
                    </div>
                </TransitionChild>
                <div
                    class="flex-shrink-0 w-14"
                    aria-hidden="true"
                >
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:flex md:flex-shrink-0 bg-indigo-700">
            <div class="flex flex-col w-64">
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex overflow-y-auto flex-col flex-grow pt-5 pb-4">
                    <div class="flex flex-shrink-0 items-center px-4">
                        <img
                            class="w-auto h-8"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                            alt="Workflow"
                        >
                    </div>
                    <div class="flex flex-col flex-1 mt-5">
                        <nav class="flex-1 px-2 space-y-1">
                            <Link
                                v-for="item in navigation"
                                :key="item.name"
                                :href="item.href"
                                :class="[$page.url.startsWith(item.href) ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
                            >
                                <component
                                    :is="item.icon"
                                    class="flex-shrink-0 mr-3 w-6 h-6 text-indigo-300"
                                    aria-hidden="true"
                                />
                                {{ item.name }}
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex overflow-hidden flex-col flex-1 w-0">
            <div class="flex relative z-10 flex-shrink-0 h-16 bg-white shadow">
                <button
                    type="button"
                    class="md:hidden px-4 text-gray-500 border-r border-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none"
                    @click="sidebarOpen = true"
                >
                    <span class="sr-only">Open sidebar</span>
                    <MenuAlt2Icon
                        class="w-6 h-6"
                        aria-hidden="true"
                    />
                </button>
                <div class="flex flex-1 justify-between items-center px-4">
                    <div class="flex flex-1">
                        <form
                            class="flex mb-0 md:ml-0 w-full"
                            action="#"
                            method="GET"
                        >
                            <label
                                for="search-field"
                                class="sr-only"
                            >Search</label>
                            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                <div class="flex absolute inset-y-0 left-0 items-center pointer-events-none">
                                    <SearchIcon
                                        class="w-5 h-5"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    id="search-field"
                                    class="block py-2 pr-3 pl-8 w-full h-full sm:text-sm placeholder-gray-500 focus:placeholder-gray-400 text-gray-900 border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
                                    placeholder="Search"
                                    type="search"
                                    name="search"
                                >
                            </div>
                        </form>
                    </div>
                    <div class="flex items-center ml-4 md:ml-6">
                        <button
                            type="button"
                            class="p-1 text-gray-400 hover:text-gray-500 bg-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                        >
                            <span class="sr-only">View notifications</span>
                            <BellIcon
                                class="w-6 h-6"
                                aria-hidden="true"
                            />
                        </button>

                        <!-- Profile dropdown -->
                        <Menu
                            as="div"
                            class="relative ml-3"
                        >
                            <div>
                                <MenuButton class="flex items-center max-w-xs text-sm bg-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
                                    <span class="sr-only">Open user menu</span>
                                    <img
                                        class="w-8 h-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1637921884274-e12c48d7cd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    >
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
                                <MenuItems class="absolute right-0 py-1 mt-2 w-48 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
                                    <MenuItem
                                        v-for="item in userNavigation"
                                        :key="item.name"
                                        v-slot="{ active }"
                                    >
                                        <Link
                                            :href="item.href"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left']"
                                            method="post"
                                            as="button"
                                        >
                                            {{ item.name }}
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <main class="overflow-y-auto relative flex-1 focus:outline-none">
                <div class="py-6">
                    <div class="px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
                        <slot />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';
import {
    BellIcon,
    CogIcon,
    HomeIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';
import { Link } from "@inertiajs/inertia-vue3";
import { Head } from "@inertiajs/inertia-vue3";

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Users', href: '/dashboard/users', icon: UsersIcon },
    { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
];
const userNavigation = [
    // { name: 'Your Profile', href: '#' },
    // { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '/logout' },
];

export default {
    components: {
        Dialog,
        DialogOverlay,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        BellIcon,
        MenuAlt2Icon,
        SearchIcon,
        XIcon,
        Link,
        Head,
    },
    setup() {
        const sidebarOpen = ref(false);

        return {
            navigation,
            userNavigation,
            sidebarOpen,
        };
    },
};
</script>
