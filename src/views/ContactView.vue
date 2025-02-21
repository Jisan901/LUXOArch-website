<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';


const isSending = ref(false)

function sendFormData(e) {
  if (isSending.value) return
  isSending.value = true
  const form = e.target
  const user = form.name.value
  const postcode = 'form.postcode.value'
  const email = form.email.value
  const message = form.message.value
  const phone = form.phone.value

  const data = {
    name: user,
    postcode,
    email,
    message,
    phone
  }

  const option = {
    publicKey: 'QdE_kZCvixlxeI6aa',
    blockHeadless: true
  }

  emailjs.send("service_2c211ih", "template_u7zxnpw", data, option)
    .then((response) => {
      alert('SUCCESS!' + response.text);
    },
      (error) => {
        alert('FAILED...', error);
      }).finally(() => {
        isSending.value = false
      })


  //     fetch("https://formsubmit.co/ajax/jisuna901@email.com", {
  //     method: "POST",
  //     headers: { 
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  // })
  //     .then(response => response.json())
  //     .then(data => alert('SUCCESS!'))
  //     .catch(error => alert('FAILED...'+error.message))
  //     .finally(()=>{
  //           isSending.value = false
  //         })
}

</script>

<template>
  <section class="text-gray-400 bg-[var(--bg-color)] body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-[var(--bg-color)] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0"
          marginwidth="0" scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.777326569421!2d151.0344867748133!3d-33.92113012176962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd588a283095%3A0x76720e4cb927cff8!2sLuxoarch%20Design%20%26%20Studio!5e0!3m2!1sen!2sbd!4v1735184927575!5m2!1sen!2sbd"
          style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe>
        <div class="bg-[var(--bg-color)] relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
            <p class="mt-1">12 Gratwick Mews, Edmondson Park, NSW 2174, Australia</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
            <a href="mailto:info@luxoarch.com.au" class="text-yellow-400 leading-relaxed">info@luxoarch.com.au</a>
            <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
            <a class="leading-relaxed" href="tel:0426235095">0426 235 095</a>
          </div>
        </div>
      </div>
      <form @submit.prevent="sendFormData"
        class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-white text-lg mb-1 font-medium title-font">Get in touch.</h2>
        <p class="leading-relaxed mb-5">To discuss your next project, reach out to us via email or phone to chat</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
          <input required type="text" id="name" name="name"
            placeholder="Enter your Name"
            class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">Phone</label>
          <input required type="tel" id="phone" name="phone" placeholder="Enter your Phone"
            class="w-full  bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
          <input required type="email" id="email" name="email" placeholder="Enter your Email"
            class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <!-- <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-400">POST CODE</label>
          <input required type="text" id="postcode" name="postcode" placeholder="Enter your POST code"
            class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div> -->
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
          <textarea required id="message" name="message"
            class="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            placeholder="Describe Project details, services etc"></textarea>
        </div>
        <button type='submit' :disabled="isSending"
          class="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg disabled:grayscale disabled:cursor-wait">Submit</button>
        <p class="text-xs text-gray-400 text-opacity-90 mt-3">Complete the enquiry form and a member of our team will be
          in touch as soon as possible.</p>
      </form>
    </div>
  </section>
</template>