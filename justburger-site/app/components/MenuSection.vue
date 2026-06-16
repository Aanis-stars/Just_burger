<template>
  <section id="menu" class="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[450px]">
        <!-- Infinite Carousel Background -->
        <div class="absolute inset-0 flex items-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div class="carousel-track flex space-x-4 sm:space-x-6 py-4">
            <!-- First set of images -->
            <div v-for="n in 5" :key="'first-' + n" class="flex-shrink-0">
              <div class="w-40 h-48 sm:w-52 sm:h-60 lg:w-60 lg:h-72 rounded-lg overflow-hidden shadow-lg">
                <img 
                  :src="`/images/ONE_COM_${30 + n}.png`" 
                  :alt="`Burger ${n}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <!-- Duplicate set for seamless loop -->
            <div v-for="n in 5" :key="'second-' + n" class="flex-shrink-0">
              <div class="w-40 h-48 sm:w-52 sm:h-60 lg:w-60 lg:h-72 rounded-lg overflow-hidden shadow-lg">
                <img 
                  :src="`/images/ONE_COM_${30 + n}.png`" 
                  :alt="`Burger ${n}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Menu Card Overlay -->
        <div class="relative z-10 flex justify-center md:justify-end py-4 sm:py-6">
          <div class="w-full max-w-xs sm:max-w-sm md:w-2/5 lg:w-1/3 px-4 sm:px-0">
            <div class="bg-gradient-to-br from-jb-green to-jb-green-dark p-4 sm:p-8 lg:p-10 rounded-lg shadow-2xl text-center min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] flex flex-col justify-center">
              <h2 class="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-3 sm:mb-6">
                Menu
              </h2>
              <p class="text-gray-300 leading-relaxed mb-4 sm:mb-8 text-[11px] sm:text-sm lg:text-base line-clamp-3 sm:line-clamp-none">
                Eh psst… c’est par ici que ça se passe pour les burgers. Découvrez notre sélection de burgers, sides et menus pensés pour tous les goûts. 
              </p>
              <a href="/menu" class="btn-primary inline-block text-xs sm:text-base px-5 sm:px-6 py-2 sm:py-2.5">
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
