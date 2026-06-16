<template>
  <article class="bg-white rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
    <h3 class="text-base sm:text-lg font-bold text-jb-green mb-2">{{ item.name }}</h3>
    <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">{{ item.description }}</p>
    <div class="text-right">
      <span class="text-lg sm:text-xl font-bold text-jb-gold">{{ item.price }} EUR</span>
    </div>
  </article>
</template>

<script setup lang="ts">
interface MenuItemSimpleData {
  name: string
  description: string
  price: string
}

defineProps<{
  item: MenuItemSimpleData
}>()
</script>
