import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import router from './router'


library.add(faUserSecret)

createApp(App).use(router).mount('#app')