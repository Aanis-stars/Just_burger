<template>
  <div>
    <AppHeader />
    <main class="menu-page pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- En-tete du menu -->
        <header class="text-center mb-10 sm:mb-14">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-jb-green mb-4">
            Notre Menu
          </h1>
          <p class="text-gray-600 text-base sm:text-lg lg:text-xl">
            Des burgers genereux, savoureux et faits maison
          </p>
        </header>

        <!-- Texte descriptif -->
        <section class="max-w-4xl mx-auto text-center mb-8 sm:mb-10 p-6 sm:p-8 bg-gradient-to-r from-jb-green/5 via-jb-green/10 to-jb-green/5 rounded-xl border border-jb-green/10">
          <p class="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
            Bienvenue chez <strong class="text-jb-green">Just Burger</strong>, votre fast-food de reference pour des burgers genereux, savoureux et faits maison. Ici, chaque recette est pensee avec passion pour vous offrir une explosion de gout a chaque bouchee. Decouvrez un univers ou le plaisir est roi, et le burger une veritable creation !
          </p>
        </section>

        <!-- Bouton de telechargement -->
        <div class="flex justify-end mb-4 sm:mb-6">
          <a 
            href="/files/menu.pdf" 
            download
            class="btn-primary inline-flex items-center gap-2 text-sm"
            aria-label="Telecharger notre menu en PDF"
          >
            <Icon name="mdi:download" class="w-5 h-5" />
            Telecharger le menu
          </a>
        </div>

        <section class="text-center py-10 sm:py-14 border-t border-gray-200">
          <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
            <span class="px-4 py-2 bg-gradient-to-r from-jb-green to-jb-green-light text-white text-xs sm:text-sm font-medium rounded-full">Fait maison</span>
            <span class="px-4 py-2 bg-gradient-to-r from-jb-green to-jb-green-light text-white text-xs sm:text-sm font-medium rounded-full">100% Halal</span>
            <span class="px-4 py-2 bg-gradient-to-r from-jb-green to-jb-green-light text-white text-xs sm:text-sm font-medium rounded-full">Produits frais</span>
          </div>
        </section>

        <!-- Navigation du menu -->
        <nav class="sticky top-20 z-40 bg-gradient-to-r from-jb-green via-jb-green to-jb-green-dark py-4 mb-10 sm:mb-14 rounded-lg shadow-lg" aria-label="Navigation du menu">
          <ul class="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6">
            <li v-for="category in categories" :key="category.id">
              <a 
                :href="`#${category.id}`" 
                class="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                {{ category.name }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Section Nouveautes -->
        <section class="menu-category mb-14 sm:mb-20 p-6 sm:p-8 bg-gradient-to-br from-jb-gold/5 to-jb-gold/10 rounded-2xl" id="nouveautes">
          <div class="flex items-center gap-4 mb-6 sm:mb-8">
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-jb-green">Nouveautés</h2>
            <span class="px-3 py-1 bg-gradient-to-r from-jb-gold to-jb-gold-dark text-black text-xs font-bold rounded-full">Nouveau</span>
          </div>
          <p class="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Decouvrez nos dernières créations gourmandes !</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <MenuItemCard 
              v-for="item in menuItems.nouveautes" 
              :key="item.name"
              :item="item"
            />
          </div>
        </section>

        <!-- Section Nos Burgers -->
        <section class="menu-category mb-14 sm:mb-20" id="nos-burgers">
          <div class="flex items-center gap-4 mb-6 sm:mb-8">
            <div class="w-1 h-8 bg-gradient-to-b from-jb-green to-jb-green-light rounded-full"></div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-jb-green">Nos Burgers</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <MenuItemCard 
              v-for="item in menuItems.burgers" 
              :key="item.name"
              :item="item"
            />
          </div>
        </section>

        <!-- Section Nos Smash Burgers -->
        <section class="menu-category mb-14 sm:mb-20 p-6 sm:p-8 bg-gradient-to-br from-jb-green/5 to-jb-green/10 rounded-2xl" id="nos-smashburgers">
          <div class="flex items-center gap-4 mb-4 sm:mb-6">
            <div class="w-1 h-8 bg-gradient-to-b from-jb-green to-jb-green-light rounded-full"></div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-jb-green">Nos Smash Burgers</h2>
          </div>
          <p class="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base ml-5">La technique du smash pour un gout intense et une texture croustillante !</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <MenuItemCard 
              v-for="item in menuItems.smashburgers" 
              :key="item.name"
              :item="item"
            />
          </div>
        </section>

        <!-- Section Nos Accompagnements -->
        <section class="menu-category mb-14 sm:mb-20" id="nos-accompagnements">
          <div class="flex items-center gap-4 mb-6 sm:mb-8">
            <div class="w-1 h-8 bg-gradient-to-b from-jb-gold to-jb-gold-dark rounded-full"></div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-jb-green">Nos Accompagnements</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <MenuItemCard 
              v-for="item in menuItems.accompagnements" 
              :key="item.name"
              :item="item"
            />
          </div>
        </section>

        <!-- Section Desserts -->
        <section class="menu-category mb-14 sm:mb-20" id="nos-desserts">
          <div class="flex items-center gap-4 mb-6 sm:mb-8">
            <div class="w-1 h-8 bg-gradient-to-b from-jb-green to-jb-green-light rounded-full"></div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-jb-green">Nos Desserts</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <MenuItemSimple 
              v-for="item in menuItems.desserts" 
              :key="item.name"
              :item="item"
            />
          </div>
        </section>

        <!-- Section Boissons -->
        <section class="menu-category mb-14 sm:mb-20" id="nos-boissons">
          <div class="flex items-center gap-4 mb-6 sm:mb-8">
            <div class="w-1 h-8 bg-gradient-to-b from-jb-gold to-jb-gold-dark rounded-full"></div>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-jb-green">Nos Boissons</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <MenuItemSimple 
              v-for="item in menuItems.boissons" 
              :key="item.name"
              :item="item"
            />
          </div>
        </section>

        <!-- Informations complementaires -->
        <section class="text-center py-10 sm:py-14 border-t border-gray-200">
          <p class="text-gray-500 text-xs sm:text-sm">
            Pour toute question sur les allergenes, n'hesitez pas a nous consulter.
          </p>
        </section>

      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Notre Menu',
  description: 'Decouvrez notre menu de burgers artisanaux, smash burgers, accompagnements et desserts. 100% Halal et fait maison a Mulhouse.',
  ogTitle: 'Menu - JustBurger',
  ogDescription: 'Burgers, Smash Burgers, Accompagnements, Desserts et Boissons. Tous nos produits sont faits maison et 100% Halal.',
  ogImage: '/images/og-menu.jpg',
  twitterCard: 'summary_large_image'
})

// Categories pour la navigation
const categories = [
  { id: 'nouveautes', name: 'Nouveautes' },
  { id: 'nos-burgers', name: 'Burgers' },
  { id: 'nos-smashburgers', name: 'Smash Burgers' },
  { id: 'nos-accompagnements', name: 'Accompagnements' },
  { id: 'nos-desserts', name: 'Desserts' }
]

// Donnees du menu
const menuItems = {
  nouveautes: [
    {
      name: 'RICHMOND',
      description: 'Steak de boeuf 130g, galette de pomme de terre, fromage raclette, bacon, oignons rouges, salade, oignons confits, sauce dynamite.',
      priceSingle: '10,90',
      priceMenu: '13,90',
      image: '/images/Richmond.jpg',
      badge: 'Nouveau',
      badgeType: 'new'
    },
    {
      name: 'LOUISIANA',
      description: '2 steaks de boeuf ecrases, comte, champignons pleurote, salade, oignons rouges, sauce dynamite.',
      priceSingle: '10,90',
      priceMenu: '13,90',
        image: '/images/lousiana.jpg',
      badge: 'Nouveau',
      badgeType: 'new'
    }
  ],
  burgers: [
    {
      name: 'VIRGINIA',
      description: 'Steak de boeuf 130g, cheddar, salade, oignons rouges, cornichons, sauce dynamite.',
      priceSingle: '6,90',
      priceMenu: '9,90',
      image: '/images/virginia.jpg'
    },
    {
      name: 'JUSTBURGER',
      description: 'Steak de boeuf 130g, cheddar, bacon de dinde, salade, oignons rouges, cornichons, sauce dynamite.',
      priceSingle: '8,90',
      priceMenu: '11,90',
      image: '/images/justburger.jpg',
      badge: 'Signature',
      badgeType: 'signature'
    },
    {
      name: 'NEW MEXICO',
      description: 'Steak de boeuf 130g, emmental, avocat, salade, oignons rouges, sauce chicken.',
      priceSingle: '9,90',
      priceMenu: '12,90',
      image: '/images/newmexico.jpg',
      badge: 'Frais',
      badgeType: 'fresh'
    },
    {
      name: 'MINNESOTA',
      description: 'Steak de boeuf 130g, fromage bleu, salade, oignons rouges, sauce chicken.',
      priceSingle: '8,90',
      priceMenu: '11,90',
      image: '/images/minnesota.jpg'
    },
    {
      name: 'KENTUCKY',
      description: 'Poulet pane, bacon, salade, oignons rouges, sauce chicken.',
      priceSingle: '8,90',
      priceMenu: '11,90',
      image: '/images/kentucky.jpg',
      badge: 'Poulet',
      badgeType: 'chicken'
    },
    {
      name: 'BURGER ENFANT',
      description: 'Steak de boeuf 70g, cheddar, salade, cornichons, sauce ketchup/mayo.',
      priceSingle: '4,90',
      priceMenu: '6,90',
      image: '/images/justburger.jpg',
      badge: 'Enfant',
      badgeType: 'kids'
    }
  ],
  smashburgers: [
    {
      name: 'OKLAHOMA',
      description: '2 steaks de boeuf ecrases, cheddar, salade, oignons rouges, sauce dynamite.',
      priceSingle: '8,90',
      priceMenu: '11,90',
        image: '/images/oklahoma.jpg'
    },
    {
      name: 'CHICAGO',
      description: 'Bun retourne, 2 steaks de boeuf ecrases, cheddar, bacon, oignons confits, salade, sauce dynamite.',
      priceSingle: '9,90',
      priceMenu: '12,90',
      image: '/images/Chicago.jpg',
      badge: 'Best-seller',
      badgeType: 'bestseller'
    }
  ],
  accompagnements: [
    {
      name: 'TENDERS X3',
      description: '3 morceaux de poulet pane croustillant.',
      priceSingle: '5,00',
      priceMenu: '8,00',
      image: '/images/Tenders.jpg'
    },
    {
      name: 'TENDERS X5',
      description: '5 morceaux de poulet pane croustillant.',
      priceSingle: '8,00',
      priceMenu: '11,00',
      image: '/images/Tenders5.jpg'
    },
    {
      name: 'FRITES MAISON',
      description: 'Frites dorees et croustillantes.',
      priceSingle: '3,00',
      priceMenu: '4,00',
      image: '/images/frite.jpg',
      priceLabel: 'Portion',
      priceMenuLabel: 'Grande'
    }
  ],
  desserts: [
    {
      name: 'CHEESECAKE',
      description: 'Cheesecake onctueux fait maison.',
      price: '4,00'
    },
    {
      name: 'COOKIE GOURMAND',
      description: 'Cookie aux pepites de chocolat, tiede et fondant.',
      price: '4,00'
    }
  ],
  boissons: [
    {
      name: 'SODA',
      description: 'Coca-Cola, Fanta, Sprite, Orangina...',
      price: '2,00'
    },
    {
      name: 'EAU PLATE',
      description: 'Bouteille d\'eau minerale 50cl.',
      price: '2,00'
    },
    {
      name: 'CAPRI-SUN',
      description: 'Boisson fruitee pour les enfants.',
      price: '1,00'
    }
  ]
}
</script>
