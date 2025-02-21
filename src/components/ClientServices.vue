<script setup>
import papaparse from 'papaparse';
import { onMounted, ref } from 'vue';
import Loading from './Loading.vue';

const services = ref([])

const isLoading = ref(true);
onMounted(async (e) => {
    const fileUrl = 'https://luxoarch.github.io/assets/services.csv'
    const res = await fetch(fileUrl)
    const data = await res.text()
    const parsed = papaparse.parse(data, { header: true })
    services.value = parsed.data
    isLoading.value = false;

})


</script>


<template>
    <section class="py-12 bg-[var(--bg-color)] text-gray-100  pt-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
                <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">What we Offer?
                </h2>
                <p class="mb-4">We are provide complete solution on design and architecture that helps you be more
                    productive and efficient when building
                    your dream.</p>

            </div>
            <Loading v-if="isLoading" />
            <div v-else
                class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                <div v-for="service in services" class="relative">
                    <template v-if="service.service">
                        <div class="absolute -inset-1">
                            <div
                                class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                            </div>
                        </div>
                        <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                            <div class="p-9"><img class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" :src="service.icon"
                                    alt="icon">
                                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">{{ service.service }}</h3>
                                <p class="mt-6 text-base text-gray-600">{{ service.description }}</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>