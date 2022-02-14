<script setup>
import { ref } from 'vue'

const links = [
    'Sed non neque a nisl tincidunt mattis',
    'Vestibulum auctor orci quis lacus rutrumrisus',
    'Nullam hendrerit lacinia mi',
    'Phasellus sit amet turpis sapien',
    'Aliquam lorem ac porta mattis',
    'Pulvinar felis elementum',
    'Nullam hendrerit lacinia mi'
]
const items = [
    { text: "Lokus: digitale læremidler" },
    { text: "Nettbutikk - kjøp læremidler" },
    { text: "Lorem ipsum" },
    { text: "Lorem ipsum" },]

let isActive = ref(null)

const toggleItem = (index) => {
    if (isActive.value === index) {
        isActive.value = null
    } else {
        isActive.value = index;
    }
}
</script>

<template>
    <div v-for="(item, index) in items" :class="{ active: isActive === index }">
        <div class="w-full flex justify-between items-center py-3">
            <p class="text-lg">{{ item.text }}</p>
            <button
                @click="toggleItem(index)"
                class="w-[35px] h-[35px] flex items-center justify-center border-2 border-black focus:ring-2 hover:border-aschehoug-light-blue hover:bg-aschehoug-light-blue hover:text-white rounded-full"
            >
                <svg
                    :class="isActive === index ? 'rotate-180' : ''"
                    class="h-6 w-6 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
        </div>
        <div class="pt-2 pb-3" v-if="isActive === index">
            <div v-for="link in links">
                <button
                    class="text-lg text-left underline text-aschehoug-light-blue hover:text-black"
                >{{ link }}</button>
            </div>
        </div>
        <hr class="bg-[#BFBFBF]" />
    </div>
</template>