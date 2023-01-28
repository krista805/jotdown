import { createApp, useAttrs } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import './assets/main.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes: []
})

createApp(App)
    .use(router)
    .mount('#app')
