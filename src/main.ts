import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { MotionPlugin } from '@vueuse/motion'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faHome,
  faUser,
  faEnvelope,
  faRoad,
  faCode
} from '@fortawesome/free-solid-svg-icons'

library.add(faXTwitter, faGithub, faLinkedin, faHeart, faHome, faUser, faEnvelope, faRoad, faCode)

const app = createApp(App)
const pinia = createPinia()

app.use(MotionPlugin)
app.use(pinia)
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    autoHideBadge: true
  }
})
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
