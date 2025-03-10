<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import logo1 from "@/assets/logo.png";
import logo2 from "@/assets/logo-tr.png";

const logo = ref(logo1);
const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false); // Track menu state

const navStyle = ref({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(10px)",
  display: "flex",
  justifyContent: "space-between",
});

const isLightTheme = computed(
  () => route.fullPath === "/at" || route.fullPath === "/prcts",
);

// Watch for theme changes
watch(isLightTheme, () => {
  if (isLightTheme.value) {
    logo.value = logo2;
    navStyle.value = {
      backgroundColor: "rgba(255, 255, 255, 1)",
      backdropFilter: "none",
      display: "flex",
      justifyContent: "space-between",
    };
  } else {
    logo.value = logo1;
    navStyle.value = {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(10px)",
      display: "flex",
      justifyContent: "space-between",
    };
  }
});

// Function to close menu on navigation
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Watch for route changes and close menu
watch(route, closeMenu);
</script>

<template>
  <div class="w-full flex justify-center items-center">
    <div
      class="navbar fixed top-4 z-10 shadow-lg lg:rounded-full lg:w-[85%] mx-auto"
      :style="navStyle"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <!-- Mobile menu button -->
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost lg:hidden"
            :class="{ 'text-black': isLightTheme, 'text-white': !isLightTheme }"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <!-- Mobile Dropdown Menu -->
          <ul
            v-show="isMenuOpen"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><RouterLink to="/" @click="closeMenu">Home</RouterLink></li>
            <li>
              <RouterLink to="/about" @click="closeMenu">About</RouterLink>
            </li>
            <li>
              <RouterLink to="/services" @click="closeMenu"
                >Services</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/projects" @click="closeMenu"
                >Projects</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Logo -->
        <RouterLink
          to="/"
          class="flex justify-center items-center text-xl ml-3 text-nowrap"
          :class="{ 'text-black': isLightTheme, 'text-white': !isLightTheme }"
        >
          <img :src="logo" class="h-12 w-12" alt="logo" />
          <div class="flex flex-col justify-start ml-2 font-bold">
            <span class="text-lg">LuxoArch</span>
            <span class="md:text-sm text-xs font-normal"
              >Design and Studio</span
            >
          </div>
        </RouterLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="navbar-end">
        <div class="navbar-center hidden lg:flex">
          <ul
            class="menu menu-horizontal px-1"
            :class="{ 'text-black': isLightTheme, 'text-white': !isLightTheme }"
          >
            <li>
              <RouterLink
                to="/"
                exact-active-class="text-primary focus:text-primary"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                active-class="text-primary focus:text-primary"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services"
                active-class="text-primary focus:text-primary"
                >Services</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/projects"
                active-class="text-primary focus:text-primary"
                >Projects</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                active-class="text-primary focus:text-primary"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>