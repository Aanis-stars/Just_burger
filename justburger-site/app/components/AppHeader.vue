<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Mobile Menu Button (left on mobile) -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
        >
          <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-7 h-7 sm:w-8 sm:h-8" />
        </button>

        <!-- Left Navigation (desktop) -->
        <div class="hidden md:flex items-center justify-start flex-1 space-x-8">
          <a href="/menu" class="nav-link font-medium">Menu</a>
          <a href="/#click-collect" class="nav-link font-medium">Click and collect</a>
        </div>

        <!-- Logo -->
        <div class="flex-shrink-0 text-center">
          <a href="/" class="block">
            <h1 class="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-wider text-black">
              JUSTBURGER
            </h1>
            <div class="w-full h-0.5 bg-black mt-1"></div>
            <span class="text-[10px] sm:text-xs tracking-widest text-gray-600 mt-1 block">Let us cook</span>
          </a>
        </div>

        <!-- Right Navigation (desktop) -->
        <div class="hidden md:flex items-center justify-end flex-1 space-x-6">
          <a href="/nous-contacter" class="nav-link font-medium">Nous contacter</a>
          <div class="flex items-center space-x-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-black hover:text-jb-green transition-colors"
              aria-label="Instagram"
            >
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-black hover:text-jb-green transition-colors"
              aria-label="Facebook"
            >
              <Icon name="mdi:facebook" class="w-5 h-5" />
            </a>
            <a 
              href="https://snapchat.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-black hover:text-jb-green transition-colors"
              aria-label="Snapchat"
            >
              <Icon name="mdi:snapchat" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Spacer for mobile to balance the layout -->
        <div class="w-7 sm:w-8 md:hidden"></div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden py-4 border-t">
          <div class="flex flex-col space-y-4">
            <a href="/menu" class="nav-link font-medium" @click="isMenuOpen = false">Menu</a>
            <a href="/#click-collect" class="nav-link font-medium" @click="isMenuOpen = false">Click and collect</a>
            <a href="/nous-contacter" class="nav-link font-medium" @click="isMenuOpen = false">Nous contacter</a>
            <div class="flex items-center space-x-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="mdi:instagram" class="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="mdi:facebook" class="w-6 h-6" />
              </a>
              <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                <Icon name="mdi:snapchat" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>
