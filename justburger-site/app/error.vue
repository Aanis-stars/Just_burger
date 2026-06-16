<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-jb-green mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ error.statusMessage || 'Une erreur est survenue' }}</p>
      <NuxtLink to="/" class="btn-primary">
        Retour à l'accueil
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object
})
</script>
