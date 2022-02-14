<script setup>
defineProps({
  scroll: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <section class="w-full relative">
    <div class="w-full bg-blue-900 h-[180px] md:h-[810px]" />
    <div
      class="w-full h-full flex px-[15px] flex-col items-center text-center md:absolute md:top-0 md:left-0 md:justify-center md:items-center text-black md:text-white"
    >
      <div class="flex flex-col w-full md:items-center">
        <h1 class="mt-[27px] md-mt-0 md:mb-[27px] text-[27px] md:text-[90px]">Aschehoug Univers</h1>
        <p class="text-base md:text-[28px]">Med læreren. For eleven.</p>
      </div>
      <button
        @click="scroll"
        class="hidden md:flex absolute items-center gap-1 bottom-[50px] border-2 rounded-[37.6px] p-[13px] uppercase hover:bg-white hover:text-aschehoug-mid-blue transition"
      >
        <p class="text-xs">Aktuelt</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </section>
</template>



