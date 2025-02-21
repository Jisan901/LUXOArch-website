<script setup>
import Carousel from '@/components/Carousel.vue';
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const projectId = route.params.id;
const {getProjectById, isLoading} = inject('projects')
const project = getProjectById(projectId);
console.log(project)

</script>
<template>
    <div v-if="!isLoading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-neutral-content">
    <div class="max-w-3xl mx-auto">
        <!-- Blog post header -->
        <div class="py-8">
            <h1 class="text-3xl font-bold mb-2">{{ project.title }}</h1>
            <p class="text-gray-500 text-sm">{{ project.description }}</p>
        </div>

        <!-- Featured image -->
        <Carousel :banners="project.banners"></Carousel>

        <!-- Blog post content -->
        <div v-html="project.content" ass="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            
        </div>
        <br/>
    </div>
</div>
</template>

<style>
#app{
    background: var(--bg-color); 
}
</style>