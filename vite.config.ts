import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// 自动导入icon
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: { // 代理：请求为m1开头的url地址替换为'http://127.0.0.1:4523/'
      "/m1": {
        target: loadEnv("", process.cwd()).VITE_API_URL,
        changeOrigin: true  // 保留请求信息 使接受请求的服务器知道从哪里发送的请求
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], // 自动导入ref() 等组件
      eslintrc: {  // eslint
        enabled: true, // <-- this
      },
      resolvers: [
        ElementPlusResolver(),
        // 自动导入icon
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver(),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    VueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
