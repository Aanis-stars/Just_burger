<template>
  <div>
    <AppHeader />
    <main class="pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Page Title -->
        <header class="text-center mb-10 sm:mb-14">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-jb-green mb-4">
            Nous Contacter
          </h1>
          <p class="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Besoin d'un renseignement ? Envie de passer commande ? On repond vite, promis !
          </p>
        </header>

        <!-- Quick Contact Info -->
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <a href="tel:0367943499" class="bg-gradient-to-br from-jb-green to-jb-green-dark text-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Icon name="mdi:phone" class="w-8 h-8 mx-auto mb-3" />
            <p class="font-semibold">03.67.94.34.99</p>
          </a>
          <a href="mailto:Justburgermulhouse@gmail.com" class="bg-gradient-to-br from-jb-green to-jb-green-dark text-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Icon name="mdi:email" class="w-8 h-8 mx-auto mb-3" />
            <p class="font-semibold text-sm sm:text-base break-all">Justburgermulhouse@gmail.com</p>
          </a>
          <div class="bg-gradient-to-br from-jb-green to-jb-green-dark text-white p-6 rounded-xl text-center">
            <Icon name="mdi:map-marker" class="w-8 h-8 mx-auto mb-3" />
            <p class="font-semibold">Rue Josue Heilmann, 68200 Mulhouse</p>
          </div>
        </section>

        <!-- Intro Text -->
        <section class="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p class="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
            Chez <strong class="text-jb-green">JUSTBURGER</strong>, on fait pas semblant. Pain cuit chaque matin, viande 100% halal selectionnee avec soin, sauces maison... Ici, le burger c'est notre passion et ca se sent des la premiere bouchee.
          </p>
        </section>

        <!-- Section Restaurant -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <!-- Image -->
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/images/Contact_1.jpg"
              alt="Interieur du restaurant JustBurger"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <!-- Text -->
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              On a voulu creer un endroit ou tu te sens bien : deco moderne, ambiance chill, que tu viennes avec tes potes, ta famille ou juste pour te faire plaisir. C'est simple, propre et accueillant.
            </p>
          </div>
        </section>

        <!-- Section Qualite -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <!-- Text -->
          <div class="space-y-4 order-2 lg:order-1">
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              Le secret ? Tout est fait sur place. Nos pains sont dores a la perfection, nos steaks sont grilles minute et nos sauces... c'est notre recette secrete ! On choisit chaque ingredient pour te garantir un burger qui envoie du lourd.
            </p>
          </div>
          
          <!-- Image -->
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
            <img 
              src="/images/Contact_2.jpg"
              alt="Cuisine et preparation chez JustBurger"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <!-- Section Contact Form -->
        <section id="contact-form" class="max-w-2xl mx-auto mb-16 sm:mb-20">
          <!-- Form -->
          <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <h3 class="text-xl font-display font-bold text-jb-green mb-4 text-center">Laissez-nous un message</h3>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 text-center">
              Un avis, une question, une idee ? Balance-nous un message, on lit tout et on repond rapidement !
            </p>
            
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">NOM*</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border-2 border-jb-gold rounded-sm focus:outline-none focus:border-jb-green transition-colors"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">ADRESSE MAIL*</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border-2 border-jb-gold rounded-sm focus:outline-none focus:border-jb-green transition-colors"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">OBJET*</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border-2 border-jb-gold rounded-sm focus:outline-none focus:border-jb-green transition-colors"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">MESSAGE</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="6"
                  placeholder="ECRIRE ICI..."
                  class="w-full px-4 py-3 border-2 border-jb-gold rounded-sm focus:outline-none focus:border-jb-green transition-colors resize-none"
                ></textarea>
              </div>
              
              <p class="text-xs text-gray-500">*CHAMPS OBLIGATOIRE</p>
              
              <!-- Success Message -->
              <div v-if="submitSuccess" class="bg-jb-green/10 border border-jb-green text-jb-green p-4 rounded-lg text-center">
                <Icon name="mdi:check-circle" class="w-6 h-6 inline-block mr-2" />
                Votre client email va s'ouvrir pour envoyer le message !
              </div>
              
              <!-- Error Message -->
              <div v-if="submitError" class="bg-red-50 border border-red-400 text-red-700 p-4 rounded-lg text-center">
                <Icon name="mdi:alert-circle" class="w-6 h-6 inline-block mr-2" />
                {{ submitError }}
              </div>
              
              <div class="text-center pt-4">
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="bg-gradient-to-r from-jb-gold to-jb-gold-dark text-black font-semibold px-10 py-3 rounded-sm hover:from-jb-gold-light hover:to-jb-gold transition-all duration-300 border-2 border-jb-gold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isSubmitting">ENVOI EN COURS...</span>
                  <span v-else>ENVOYER</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        <!-- Section Reseaux Sociaux -->
        <section class="text-center mb-16 sm:mb-20">
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-jb-green mb-4">
            Rejoins la team
          </h2>
          <p class="text-gray-700 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Pour les nouveautes, les promos exclusives et les coulisses, c'est par ici !
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <!-- Instagram -->
            <a 
              href="https://instagram.com/justburgermulhouse" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              <div class="relative z-10">
                <Icon name="mdi:instagram" class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4" />
                <p class="font-bold text-lg mb-1">Instagram</p>
                <p class="text-white/90 text-sm font-medium">@justburgermulhouse</p>
                <p class="text-white/70 text-xs mt-2">Photos et stories</p>
              </div>
            </a>
            
            <!-- Facebook -->
            <a 
              href="https://facebook.com/justburgermulhouse" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              <div class="relative z-10">
                <Icon name="mdi:facebook" class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4" />
                <p class="font-bold text-lg mb-1">Facebook</p>
                <p class="text-white/90 text-sm font-medium">JustBurger Mulhouse</p>
                <p class="text-white/70 text-xs mt-2">Actus et avis</p>
              </div>
            </a>
            
            <!-- Snapchat -->
            <a 
              href="https://snapchat.com/add/justburger_68" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-black shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              <div class="relative z-10">
                <Icon name="mdi:snapchat" class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4" />
                <p class="font-bold text-lg mb-1">Snapchat</p>
                <p class="text-black/80 text-sm font-medium">justburger_68</p>
                <p class="text-black/60 text-xs mt-2">Coulisses et filtres</p>
              </div>
            </a>
          </div>
        </section>

      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Nous Contacter',
  description: 'Contactez JustBurger - Restaurant de burgers artisanaux a Mulhouse. Envoyez-nous un message ou retrouvez-nous sur les reseaux sociaux.',
  ogTitle: 'Contactez JustBurger',
  ogDescription: 'Une question ? Un avis ? Contactez-nous via notre formulaire ou sur les reseaux sociaux.',
  ogImage: '/images/og-contact.jpg',
  twitterCard: 'summary_large_image'
})

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

// Submit form via mailto (basic) or API
const submitForm = async () => {
  isSubmitting.value = true
  submitError.value = ''
  
  try {
    // Option 1: Mailto link (works without backend)
    const mailtoLink = `mailto:Justburgermulhouse@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`
    
    window.location.href = mailtoLink
    
    // Show success
    submitSuccess.value = true
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    
    // Hide success message after 5s
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    submitError.value = 'Une erreur est survenue. Veuillez reessayer.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
