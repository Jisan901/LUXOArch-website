<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import logo1 from '@/assets/logo.png'
import logo2 from '@/assets/logo-tr.png'

const logo = ref(logo1)


const route = useRoute()
const navStyle = ref({
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'space-between',
    /* padding: 1rem 2rem; */
})
const isLightTheme = computed(() => route.fullPath === '/at' || route.fullPath === '/prcts')
watch(isLightTheme, () => {
    if (isLightTheme.value) {
        logo.value = logo2
        navStyle.value = {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            backdropFilter: 'none',
            display: 'flex',
            justifyContent: 'space-between',

        }
    }
    else {
        logo.value = logo1
        navStyle.value = {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',

        }
    }

})

</script>
<template>
    <div class="w-full flex justify-center items-center">

        <div class="navbar fixed top-4 z-10 shadow-lg lg:rounded-full lg:w-[85%] mx-auto" :style="navStyle">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden "
                        :class="{ 'text-black': isLightTheme, 'text-white': !isLightTheme }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <RouterLink class="" to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="" to="/about">About</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="" to="/services">Services</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="" to="/projects">Projects</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="" to="/contact">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
                <RouterLink to="/" class="flex justify-center items-center text-xl ml-3 text-nowrap"
                    :class="{ 'text-black': isLightTheme, 'text-white': !isLightTheme }"><img :src="logo"
                        class="h-12 w-12" alt="logo">
                    <div class="flex flex-col justify-start ml-2 font-bold">
                        <span class="text-lg">LuxoArch</span>
                        <span class="md:text-sm text-xs font-normal">Design and Studio</span>
                    </div>
                </RouterLink>
            </div>
            <div class="navbar-end">
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 "
                        :class="{ 'text-black': isLightTheme, 'text-white': !isLightTheme }">
                        <li>
                            <RouterLink to="/" exact-active-class="text-primary focus:text-primary">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink active-class="text-primary focus:text-primary" to="/about">About</RouterLink>
                        </li>
                        <li>
                            <RouterLink active-class="text-primary focus:text-primary" to="/services">Services</RouterLink>
                        </li>
                        <li>
                            <RouterLink active-class="text-primary focus:text-primary" to="/projects">Projects</RouterLink>
                        </li>
                        <li>
                            <RouterLink active-class="text-primary focus:text-primary" to="/contact">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* li a {
    border: 1px solid white;
    border-radius: 0;
    padding: 0.1rem 0.5rem;
    margin: 0 1rem;
    border-top-color: rgb(241, 221, 39);
    border-bottom-color: black;
    border-top-left-radius: 40%;
    border-bottom-right-radius: 40%;
    font-size: 1.2rem;
    background-color: rgba(0, 0,0, 0.4);
} */
/* .navbar {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem; 
 } 
 */
</style>