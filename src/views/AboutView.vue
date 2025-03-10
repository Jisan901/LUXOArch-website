<template>
  <div class="container mx-auto px-6 lg:px-16 py-20">
    <!-- Main Layout -->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-12">
      <!-- Left Image Section -->
      <div class="w-full lg:w-1/2 flex flex-col items-center space-y-6 lg:space-y-8">
        <img
          class="w-[90%] lg:w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          src="../assets/07.jpg"
          alt="about"
        />
        <img
          class="w-[90%] lg:w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          src="../assets/01.jpg"
          alt="about"
        />
      </div>

      <!-- About Us Section -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6">
        <h1 class="text-5xl text-white font-extrabold mb-4">About Us</h1>

        <p class="text-white text-lg leading-relaxed">
          LuxoArch Design and Studio is an Australian-based firm offering 
          <strong>complete building design and engineering services</strong> 
          for residential projects – Houses, Duplex, Townhouses, NDIS, Granny & Extensions.
          We pride ourselves on being a <strong>true ‘one-stop shop’</strong>, 
          guiding clients from <strong>initial design to final approval</strong>.
        </p>

        <p class="text-white text-lg leading-relaxed">
          Our experienced <strong>architects and engineers</strong> work collaboratively 
          to <strong>deliver innovative and sustainable solutions</strong> tailored to your needs.
          We create spaces that are <strong>functional, aesthetically pleasing, and a true reflection of your vision</strong>.
        </p>

        <RouterLink
          to="/services"
          class="mt-5 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:scale-105"
        >
          Our Services
        </RouterLink>

        <!-- Why Choose LuxoArch Section -->
        <div class="mt-8 bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
          <h2 class="text-3xl text-yellow-500 font-semibold text-center lg:text-left">
            Why Choose LuxoArch?
          </h2>

          <ul class="text-white text-lg mt-4 space-y-3">
            <li class="flex items-start"><span class="text-yellow-500 mr-2">✔</span> <strong>Creative Excellence:</strong> Unique & personalized home designs.</li>
            <li class="flex items-start"><span class="text-yellow-500 mr-2">✔</span> <strong>Residential Expertise:</strong> Specialized in crafting dream homes.</li>
            <li class="flex items-start"><span class="text-yellow-500 mr-2">✔</span> <strong>Attention to Detail:</strong> Every design is a masterpiece.</li>
            <li class="flex items-start"><span class="text-yellow-500 mr-2">✔</span> <strong>Clear Communication:</strong> Keeping you engaged throughout.</li>
            <li class="flex items-start"><span class="text-yellow-500 mr-2">✔</span> <strong>Timely Delivery:</strong> We ensure on-time project completion.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Explore Section (Now Improved) -->
    <div class="w-full flex flex-col lg:flex-row items-center justify-center mt-20 gap-12">
      <!-- Explore Image -->
      <img
        class="w-[90%] lg:w-[45%] h-auto rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        src="../assets/FERDOUS.jpg"
        alt="about"
      />

      <!-- Explore Content -->
      <div class="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 w-[90%] lg:w-[50%] text-center lg:text-left">
        <span class="text-yellow-500 uppercase font-semibold text-lg">Explore</span>
        <h1 class="text-4xl text-white font-bold">Our Creations</h1>
        <p class="text-lg text-gray-300 mt-4">
          Take a look at our projects to see the diverse range of designs we have successfully completed.
        </p>

        <div class="mt-6">
          <RouterLink
            to="/allprojects"
            class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:scale-105"
          >
            Explore
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>