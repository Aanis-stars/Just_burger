<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <IntroSection />
      <LocationSection />
      <MenuSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Accueil',
  description: 'JustBurger - Restaurant de burgers artisanaux a Mulhouse. Click and collect disponible. 100% Halal et fait maison.',
  ogTitle: 'JustBurger - Let us cook',
  ogDescription: 'Decouvrez nos burgers genereux et savoureux, faits maison avec des produits frais. Click and collect disponible.',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>
