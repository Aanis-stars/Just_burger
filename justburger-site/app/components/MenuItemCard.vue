<template>
  <article class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <!-- Image -->
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <img 
        v-if="item.image"
        :src="item.image" 
        :alt="item.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <span class="text-gray-400 text-sm">Photo a venir</span>
      </div>
      
      <!-- Badge -->
      <span 
        v-if="item.badge"
        :class="badgeClasses"
        class="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full"
      >
        {{ item.badge }}
      </span>
    </div>
    
    <!-- Content -->
    <div class="p-4 sm:p-5">
      <h3 class="text-lg sm:text-xl font-bold text-jb-green mb-2">{{ item.name }}</h3>
      <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{{ item.description }}</p>
      
      <!-- Prices -->
      <div class="flex flex-wrap gap-3 sm:gap-4 text-sm">
        <div class="flex items-center gap-1">
          <span class="text-gray-500">{{ item.priceLabel || 'Seul' }}:</span>
          <span class="font-bold text-jb-green">{{ item.priceSingle }} EUR</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-gray-500">{{ item.priceMenuLabel || 'Menu' }}:</span>
          <span class="font-bold text-jb-gold">{{ item.priceMenu }} EUR</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface MenuItem {
  name: string
  description: string
  priceSingle: string
  priceMenu: string
  image?: string | null
  badge?: string
  badgeType?: string
  priceLabel?: string
  priceMenuLabel?: string
}

const props = defineProps<{
  item: MenuItem
}>()

const badgeClasses = computed(() => {
  const baseClasses = ''
  switch (props.item.badgeType) {
    case 'new':
      return `${baseClasses} bg-gradient-to-r from-jb-gold to-jb-gold-dark text-black`
    case 'signature':
      return `${baseClasses} bg-gradient-to-r from-jb-green to-jb-green-light text-white`
    case 'bestseller':
      return `${baseClasses} bg-gradient-to-r from-red-500 to-red-600 text-white`
    case 'fresh':
      return `${baseClasses} bg-gradient-to-r from-green-400 to-green-500 text-white`
    case 'chicken':
      return `${baseClasses} bg-gradient-to-r from-orange-400 to-orange-500 text-white`
    case 'kids':
      return `${baseClasses} bg-gradient-to-r from-pink-400 to-pink-500 text-white`
    default:
      return `${baseClasses} bg-gray-200 text-gray-700`
  }
})
</script>
