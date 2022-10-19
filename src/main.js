import { createApp } from 'vue'

import App from './App.vue'
import VComponent from './components/VComponent.vue'

import './assets/main.css'

const app = createApp(App)

app.component('v-component', VComponent)

app.mount('#app')
