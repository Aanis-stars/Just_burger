<template>
  <section id="click-collect" class="relative pt-20">
    <!-- Video Container -->
    <div class="relative w-full">
      <div class="w-full lg:max-h-[90vh] lg:overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 pointer-events-none"></div>
        <video 
          ref="videoRef"
          autoplay 
          muted 
          loop 
          playsinline
          class="w-full h-auto block lg:w-full lg:h-full lg:object-cover"
          @click="toggleVideo"
        >
          <source src="/videos/JUST_BURGER.mp4" type="video/mp4" />
        </video>
      </div>
      
      <!-- Play/Pause Button -->
      <button 
        @click="toggleVideo"
        class="absolute z-20 bottom-16 right-4 sm:bottom-20 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
        :aria-label="isPlaying ? 'Mettre en pause' : 'Lire la vidéo'"
      >
        <Icon :name="isPlaying ? 'mdi:pause' : 'mdi:play'" class="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <!-- Button overlay at bottom center -->
      <div class="absolute bottom-[-24px] left-0 right-0 z-20 text-center px-4">
        <a 
          href="#click-collect-order" 
          class="inline-block text-sm sm:text-base lg:text-lg bg-gradient-to-r from-jb-green-dark to-jb-green text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-sm hover:from-jb-green hover:to-jb-green-light transition-all duration-300 border-2 border-jb-green-dark hover:border-jb-green"
        >
          Click and collect
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)

const toggleVideo = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause()
    } else {
      videoRef.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}
</script>
