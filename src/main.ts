import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faRoad } from '@fortawesome/free-solid-svg-icons/faRoad'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'

library.add(faXTwitter, faGithub, faLinkedin, faHeart, faHome, faUser, faEnvelope, faRoad, faCode)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    autoHideBadge: true
  }
})
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
