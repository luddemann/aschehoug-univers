<script setup>
import { ref } from 'vue'
import ColumnCard from './common/ColumnCard.vue';

const items = ref(3)
</script>

<template>
    <section class="max-w-screen-aschehoug m-auto px-[15px]">
        <h2 class="text-base uppercase mb-[22px] text-[#152935] tracking-widest">Saker</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-[27px]">
            <ColumnCard v-for="i in 4" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[27px] mt-[50px] mb-10">
            <ColumnCard v-for="item in items" />
        </div>
        <div class="flex items-center justify-between">
            <button
                @click="items += 3"
                class="flex items-center border border-[#979797] p-[11px] rounded text-aschehoug-light-blue hover:text-white hover:bg-aschehoug-light-blue transition"
            >
                <p class="mr-[10px]">Se flere saker</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </button>
            <button
                class="text-aschehoug-light-blue hover:underline"
                v-show="items > 3"
                @click="items = 3"
            >Skjul saker</button>
        </div>
    </section>
</template>

