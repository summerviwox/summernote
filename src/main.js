import { createApp } from 'vue'
import App from './App.vue'
console.log(process.env.NODE_ENV,process.env.VUE_APP_DIST)
createApp(App).mount('#app')
