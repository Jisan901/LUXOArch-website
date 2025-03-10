<script setup>
import papaparse from "papaparse";
import { onMounted, ref } from "vue";
import Loading from "./Loading.vue";

// Store services data
const services = ref([]);
const isLoading = ref(true);

// Manually Map Icons to Services (If Not in CSV)
const serviceIcons = {
  "Initial Consultation": "/icons/consultation.svg",
  "Residential Architectural Design": "/icons/architecture.svg",
  "Planning Approvals (DA/CDC Approvals)": "/icons/approval.svg",
  "Collaboration with Consultants": "/icons/collaboration.svg",
  "Alterations & Extensions Design & Approval": "/icons/alterations.svg",
  "Granny Flat Design & Swimming Pool Approval": "/icons/pool.svg",
};

onMounted(async () => {
  const fileUrl = "https://luxoarch.github.io/assets/services.csv";
  const res = await fetch(fileUrl);
  const data = await res.text();
  const parsed = papaparse.parse(data, { header: true });

  services.value = parsed.data
    .filter((service) => service.service) // Ensure valid data
    .map((service) => ({
      ...service,
      icon: service.icon || serviceIcons[service.service] || "/icons/default.svg", // Fallback icon
    }));

  isLoading.value = false;
});
</script>

<template>
  <section class="py-20 bg-[#171411] text-gray-100">
    <div class="container mx-auto px-6 lg:px-16">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white sm:text-5xl">What We Offer?</h2>
        <p class="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          We provide a complete solution for design and architecture, making your home-building experience smooth and efficient.
        </p>
      </div>

      <!-- Loading Indicator -->
      <Loading v-if="isLoading" />

      <!-- Services Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.service"
          class="relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 group overflow-hidden hover:shadow-2xl"
        >
          <!-- Hover Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-green-500/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0"
          ></div>

          <!-- Content (Placed above hover effect) -->
          <div class="relative z-10 flex flex-col items-center text-center space-y-4">
            <!-- Icon -->
            <img
              :src="service.icon"
              alt="service-icon"
              class="w-14 h-14 object-contain"
            />

            <!-- Service Title -->
            <h3 class="text-2xl font-bold text-gray-900">
              {{ service.service }}
            </h3>

            <!-- Description -->
            <p class="text-base text-gray-600 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>