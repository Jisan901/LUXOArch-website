<script setup lang="ts">
import WhyTOItem from '@/components/WhyTOItem.vue';
</script>

<template>
  <div class="flex justify-center flex-col lg:flex-row px-4 lg:px-0 min-h-screen lg:h-screen pb-5 pt-[88px] bg-[var(--bg-color)]">
    <div class="w-full lg:w-[23%] h-full flex flex-col items-center justify-center">
      <img class="w-full h-[40%]" src="../assets/07.jpg" alt="about" />
      <img class="w-full h-[40%] mt-2" src="../assets/01.jpg" alt="about" />
    </div>
    <div class="w-full lg:w-[25%] flex flex-col justify-evenly bg-[var(--bg-color)] p-4 overflow-scroll">
      <h1 class="text-4xl text-white">About us</h1>
      <p class="text-white text-sm mt-4">LuxoArch Design and Studio is an Australian-based firm offering complete
        building design and engineering services for
        residential projects – Houses, Duplex, Townhouses, NDIS, Granny & Extensions. We pride ourselves on being a true
        ‘onestop shop,’ guiding clients seamlessly through the entire process from initial design to final approval.</p>
      <p class="text-white text-sm mt-4">Our team of experienced architects and engineers work collaboratively to
        deliver innovative and sustainable solutions tailored to each client's unique needs. We believe in creating
        spaces that are not only functional but also aesthetically pleasing, ensuring that every project we undertake is
        a true reflection of our client's vision and lifestyle.</p>
      
      <RouterLink to="/services" class="btn btn-primary mt-2 btn-outline hover:bg-yellow-500">Our Services</RouterLink>
    </div>
    <div class="w-full lg:w-[31%] h-full flex flex-col items-center justify-center">
      <img class="w-full h-[50%]" src="../assets/FERDOUS.jpg" alt="about" />
      <div class="w-full p-4">
        <span class="text-yellow-500 uppercase">Explore </span>
        <h1 class="text-3xl text-base-200 font-bold">Our creation</h1>
        <p class="text-1xl text-base-300">
          Take a look on our projects to see the diverse range of projects we have successfully completed.
        </p>
        <RouterLink to="/allprojects" class="btn btn-primary  bg-yellow-500  mt-2 uppercase">Explore</RouterLink>
      </div>
    </div>
  </div>
  <div class="container mx-auto mt-6">
    <p class="text-base font-semibold leading-6 text-yellow-500 uppercase">
        Why Choose
    </p>
    <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-100 sm:text-3xl sm:leading-9">
      LuxoArch Design and Studio
    </h4>

    <ul class="mt-8 space-y-3 font-medium ">
        <WhyTOItem title="Creative Excellence: We infuse creativity into every residential design, giving your home a uniqueand personal touch."></WhyTOItem>
        <WhyTOItem title="Residential Expertise: Our team specializes in crafting dream homes, making us your ideal partner for residential architectural design"></WhyTOItem>
        <WhyTOItem title="Attention to Detail: We leave no detail overlooked, ensuring your home is a masterpiece of craftsmanship."></WhyTOItem>
        <WhyTOItem title="Clear Communication: We prioritize open and transparent communication, keeping you informed and engaged throughout the design process."></WhyTOItem>
        <WhyTOItem title="Timely Delivery: We understand the importance of delivering your dream home on time, and we're committed to making that a reality"></WhyTOItem>
    </ul>
</div>
</template>
