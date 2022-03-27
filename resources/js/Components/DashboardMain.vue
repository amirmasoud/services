<template>
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="flex-1 min-w-0">
      <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4">
      <slot name="buttons"></slot>
    </div>
  </div>

  <div class="px-4 mt-6 sm:px-6 lg:px-8">
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
      <slot name="sub-header"></slot>
    </h2>
    <slot name="sub-header-content"></slot>
  </div>

  <div class="px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg">
    <div class="align-middle inline-block min-w-full">
      <slot />
    </div>
  </div>
</template>
