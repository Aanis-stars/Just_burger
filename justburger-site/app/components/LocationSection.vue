<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-jb-green via-jb-green to-jb-green-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Info Column -->
        <div class="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
          <!-- Address -->
          <div class="flex items-start space-x-3 sm:space-x-4">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-jb-gold to-jb-gold-dark flex items-center justify-center">
                <Icon name="mdi:map-marker" class="w-5 h-5 sm:w-6 sm:h-6 text-jb-green" />
              </div>
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-semibold mb-1">Adresse</h3>
              <p class="text-gray-300 text-sm sm:text-base">Rue Josué Heilmann, 68200, Mulhouse</p>
            </div>
          </div>

          <!-- Hours -->
          <div class="flex items-start space-x-3 sm:space-x-4">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-jb-gold to-jb-gold-dark flex items-center justify-center">
                <Icon name="mdi:clock-outline" class="w-5 h-5 sm:w-6 sm:h-6 text-jb-green" />
              </div>
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-semibold mb-2">Horaire</h3>
              <ul class="text-gray-300 space-y-1 text-xs sm:text-sm">
                <li><span class="text-jb-gold font-medium">Lundi :</span> 18:00 - 22:00</li>
                <li><span class="text-jb-gold font-medium">Mardi :</span>   18:00-22:00</li>
                <li><span class="text-jb-gold font-medium">Mercredi :</span>   18:00-22:00</li>
                <li><span class="text-jb-gold font-medium">Jeudi :</span>   18:00-22:00</li>
                <li><span class="text-jb-gold font-medium">Vendredi :</span>  18:00-22:00</li>
                <li><span class="text-jb-gold font-medium">Samedi :</span>   18:00-23:00</li>
                <li><span class="text-jb-gold font-medium">Dimanche :</span> Fermé</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Map Column -->
        <div class="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl order-1 lg:order-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.5!2d7.3389!3d47.7508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ1JzAzLjAiTiA3wrAyMCcyMC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localisation JustBurger"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
