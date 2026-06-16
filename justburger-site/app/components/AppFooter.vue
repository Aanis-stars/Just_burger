<template>
  <footer id="contact" class="bg-gradient-to-br from-jb-green via-jb-green to-jb-green-dark text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
        <!-- Hours -->
        <div>
          <h3 class="text-base sm:text-lg lg:text-xl font-display font-bold mb-3 sm:mb-4 lg:mb-6">Horraires</h3>
          <ul class="space-y-1 sm:space-y-2 text-[13px] sm:text-sm">
            <li><span class="text-jb-gold">Lundi :</span> 18:00 - 22:00</li>
            <li><span class="text-jb-gold">Mardi :</span>  18:00-22:00</li>
            <li><span class="text-jb-gold">Mercredi :</span>   18:00-22:00</li>
            <li><span class="text-jb-gold">Jeudi :</span>  18:00-22:00</li>
            <li><span class="text-jb-gold">Vendredi :</span>   18:00-22:00</li>
            <li><span class="text-jb-gold">Samedi :</span>  18:00-23:00</li>
            <li><span class="text-jb-gold">Dimanche :</span> Fermé</li>
          </ul>
        </div>

        <!-- Address -->
        <div>
          <h3 class="text-base sm:text-lg lg:text-xl font-display font-bold mb-3 sm:mb-4 lg:mb-6">Adresse</h3>
          <address class="not-italic text-gray-300 leading-relaxed text-[13px] sm:text-sm">
            Rue Josué Heilmann,<br />
            68200 Mulhouse
          </address>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-base sm:text-lg lg:text-xl font-display font-bold mb-3 sm:mb-4 lg:mb-6">Contact</h3>
          <ul class="space-y-2 sm:space-y-2 lg:space-y-3 text-gray-300 text-[13px] sm:text-sm">
            <li>
              <a href="#contact" class="hover:text-jb-gold transition-colors">
                Nous contacter
              </a>
            </li>
            <li>
              <a href="mailto:Justburgermulhouse@gmail.com" class="hover:text-jb-gold transition-colors break-all">
                Justburgermulhouse@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:0367943499" class="hover:text-jb-gold transition-colors">
                03.67.94.34.99
              </a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="flex flex-col items-start lg:items-end">
          <div class="flex flex-col sm:flex-row lg:flex-col space-y-3 sm:space-y-0 sm:space-x-4 lg:space-y-4 lg:space-x-0">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="Instagram"
            >
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="Facebook"
            >
              <Icon name="mdi:facebook" class="w-5 h-5" />
            </a>
            <a 
              href="https://snapchat.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="Snapchat"
            >
              <Icon name="mdi:snapchat" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 text-center text-sm text-gray-400">
          <p>Just Burger 2024. Tous droits réservés</p>
          <span class="hidden md:inline mx-2">|</span>
          <a href="/mentions-legales" class="underline hover:text-jb-gold transition-colors">
            Mention Légales
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
