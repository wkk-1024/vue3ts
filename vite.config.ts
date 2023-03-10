import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 自动导入icon
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/m1/2403133-0-default": {
        target: loadEnv("", process.cwd()).VITE_API_URL, //'http://127.0.0.1:4523/',   
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      eslintrc: {
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
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
