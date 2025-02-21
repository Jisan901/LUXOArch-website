<template>
    <section class="min-h-screen  pt-[68px] w-full bg-[var(--bg-color)]">
        <Loading v-if="isLoading" />
        <div v-else class="w-full">
        <div class="w-full">
    <div class="container mx-auto px-4 py-8">
        <span class="block text-center text-xs text-primary">DISCOVER</span>
        <h1 class="text-center text-white text-5xl my-4">OUR PROJECTS</h1>
        <div v-if="projects[0]" class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Large item -->
            <div class="md:col-span-2 md:row-span-2 relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[0])}">
                <img :src="projects[0]?.banners[0]" alt="Nature" class="w-full h-full object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-2xl font-bold text-white">{{ projects[0]?.title  }}</h3>
                        <p class="text-white">{{ projects[0]?.description.substring(0,40) + '...' }}</p>
                    </div>
                </div>
            </div>

            <!-- Two small items -->
            <div class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[1])}">
                <img :src="projects[1]?.banners[0]" alt="Food" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4  class="text-xl font-bold text-white">{{ projects[1]?.title }}</h4>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[2])}">
                <img :src="projects[2]?.banners[0]" alt="Technology" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">{{ projects[2]?.title }}</h4>
                    </div>
                </div>
            </div>

            <!-- Three medium items -->
            <div class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[3])}">
                <img :src="projects[3]?.banners[0]" alt="Travel" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">{{ projects[3]?.title }}</h4>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[4])}">
                <img :src="projects[4]?.banners[0]" alt="Art" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">{{ projects[4]?.title }}</h4>
                    </div>
                </div>
            </div>

            <!-- bottom cards -->
            <div v-if="projects[5]?.banners.length" class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[5])}">
                <img :src="projects[5]?.banners[0]" alt="Art" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">{{ projects[5]?.title }}</h4>
                    </div>
                </div>
            </div>
            <div v-if="projects[6]?.banners.length" class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[6])}">
                <img :src="projects[6]?.banners[0]" alt="Art" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">{{ projects[6]?.title }}</h4>
                    </div>
                </div>
            </div>
            <div v-if="projects[7]?.banners.length" class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[7])}">
                <img :src="projects[7]?.banners[0]" alt="Art" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">{{ projects[7]?.title }}</h4>
                    </div>
                </div>
            </div>
            <div v-if="projects[8]?.banners.length" class="relative overflow-hidden someREplacementforlater shadow-lg group" @click="()=>{my_modal_1.showModal();setModalContent(projects[8])}">
                <img :src="projects[8]?.banners[0]" alt="Art" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">{{ projects[8]?.title }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center items-center">
        <RouterLink to="/allprojects" class="btn btn-primary rounded-full mx-auto my-5 uppercase tracking-widest">View all</RouterLink>       
    </div>
</div>
        </div>
    </section>
</template>
<script setup>

import Loading from '@/components/Loading.vue';
//import papaparse from 'papaparse';
import { inject, onMounted, ref } from 'vue';

const {projects,isLoading} = inject("projects")
const my_modal_1 = ref(null)
const setModalContent = inject('setModalContent')

onMounted(async ()=>{
    //const fileUrl = new URL('@/assets/data/projects.csv', import.meta.url).href;
    //const fileUrl = 'https://luxoarch.github.io/assets/projects.csv';
    //const res = await fetch(fileUrl)
    // const data = await res.text()
    // const parsed = papaparse.parse(data, {header: true})
    // projects.value = parsed.data
    my_modal_1.value = document.getElementById('my_modal_1')
    //isLoading.value = false
})

</script>
<style></style>