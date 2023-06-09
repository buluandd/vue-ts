import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          ensureStyleFile: true // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
        },
      ]
    }),
  ],
  server: {
    port: 8000,
    hmr: {
      host: '127.0.0.1',
      port: 8000,
    },
    // 设置代理
    proxy: {
      'api': {
        target: 'your https add ress',
        changeOrigin: true, // 跨域
        rewrite: (path: string) => path.repeat(/^\/api/, '')
      }
    }
  }
})
