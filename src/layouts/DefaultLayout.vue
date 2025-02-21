<script setup>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
import Modal from '../components/Modal.vue';
import { provide, ref } from 'vue';
import Card from '../components/Card.vue';
import Footerv3 from '@/components/Footerv3.vue';

const currentModalContentComponent = ref({});
const setModalContent = (component) => {
  currentModalContentComponent.value = component;
};

provide('setModalContent', setModalContent);
</script>
<template>
  <ClientOnly>
    <Navigation />
    <Modal>
      <Card v-if="currentModalContentComponent?.title" :data="currentModalContentComponent" />
    </Modal>
  </ClientOnly>
    <RouterView />
  <ClientOnly>
    <Footerv3/>
  </ClientOnly>
</template>