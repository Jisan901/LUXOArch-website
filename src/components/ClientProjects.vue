<template>
  <section class="container mx-auto px-4 py-8 pt-[68px] bg-[var(--bg-color)] text-neutral-content">
    <h2 class="text-4xl border-b-4 border-primary inline-block">Projects</h2>
    <Loading v-if="isLoading" />
    <div v-else class="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full min-h-screen mt-4">
      <template v-for="project in projects">
        <div>
        <div v-if="project.title" className="card bg-transparent max-w-96 mx-auto bg-base-100 shadow-lg shadow-gray-900">
          <figure className="px-10 pt-10">
              <Carousel :banners="project.banners"></Carousel>
          </figure>
          <RouterLink :to="`/project/${project.id}`" className="card-body items-center text-center">
            <h2 className="card-title">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
          </RouterLink>
        </div>
      </div>
      </template>
    </div>
  </section>
</template>
<script setup>
//import papaparse from 'papaparse';
import { ref, onMounted } from 'vue';
import Loading from './Loading.vue';
import { inject } from 'vue';
import Carousel from './Carousel.vue';

const {projects, isLoading} = inject('projects')

onMounted(async () => {
  // const fileUrl = 'https://luxoarch.github.io/assets/projects.csv';
  // const res = await fetch(fileUrl)
  // const data = await res.text()
  // const parsed = papaparse.parse(data, { header: true })
  // projects.value = parsed.data
  // isLoading.value = false;
})
</script>