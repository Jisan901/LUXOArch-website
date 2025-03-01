<script setup lang="ts">
import Bottom from './Drawer/Bottom.vue';
import Top from './Drawer/Top.vue';
</script>

<template>
    <div className="drawer lg:drawer-open">
        <input id="main-drawer" type="checkbox" className="drawer-toggle" />
        <div className="z-[0] drawer-content overflow-x-auto flex flex-col w-[calc(100% - 256px)] bg-white">
            <slot></slot>
        </div>
        <div className="drawer-side">
            <label htmlFor="main-drawer" className="drawer-overlay"></label>
            <ul className="z-[1] menu menu-hover-none p-4 w-64 h-full bg-base-200 text-base-content justify-between">
                <Top/>
                <Bottom/>
            </ul>
        </div>
    </div>
</template>
