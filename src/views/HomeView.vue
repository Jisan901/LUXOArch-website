<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.getElementById("video").play();
});
</script>

<template>
  <main>
    <div class="hero bg-[#171411] min-h-screen pr-0 w-full">
      <div
        class="hero-content flex-col lg:flex-col p-0 max-w-full w-full max-h-screen overflow-hidden"
      >
        <video
          autoplay="1"
          id="video"
          muted
          loop
          playsinline="1"
          class="video"
          src="../assets/vid.mp4"
        ></video>
        <div
          class="p-6 w-full min-h-screen flex items-center flex-col justify-center bg-[rgba(0,0,0,0.3)] pt-32 text-center"
        >
          <span class="text-yellow-500">MEET THE ARCH</span>
          <h1 class="text-5xl text-white font-bold">
            Your Vision, Our Expertise <br />
            <span class="text-yellow-500"
              >Design Your Dream Home with LuxoArch</span
            >
          </h1>
          <p class="py-6 text-white block lg:w-1/2 mx-auto">
            LuxoArch Design & Studio is a Building Design and Engineering
            services firm specializing in the residential sector– Houses, Duplex,
            Townhouses, NDIS, Granny & Extensions. We offer comprehensive design
            and approval packages for all types of developments.
          </p>
          <RouterLink
            to="/projects"
            class="btn btn-primary btn-outline rounded-full"
            >SEE OUR PROJECTS</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.hero {
  background-image: url("../assets/Frame 2 (1).png");
  background-size: 400px;
  background-repeat: no-repeat;
  background-position: top left;
}

.video {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  /* aspect-ratio: 16/9; */
  /* height: 100vh; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-aspect-ratio: 16/9) {
  .video {
    width: 100%;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video {
    width: auto;
    height: 100%;
  }
}
</style>
