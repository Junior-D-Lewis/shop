import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router/router'
/* import "bootstrap/dist/css/bootstrap.min.css" */

library.add(fas)

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')

/* First test with git in vs code */