import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/index.scss'

// 创建应用
const app = createApp(App)

// 安装插件
app.use(createPinia())
app.use(router)

app.mount('#app')
