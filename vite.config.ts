/*
 * @Author: 九日 mail@sumiler.com
 * @Date: 2024-01-29 16:35:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-03 23:03:08
 * @FilePath: \v-element\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({ // 配置VueMacros：将原本的plugins放到VueMacros({})中
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(), // 如果需要
      },
    }),
    dts({
      tsconfigPath: './tsconfig.build.json'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SparkleUI',
      fileName: 'sparkle-ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css';
          } 
          return chunkInfo.name as string;
        }
      }
    }
  }
})
