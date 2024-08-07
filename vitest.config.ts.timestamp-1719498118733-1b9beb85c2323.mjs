// vitest.config.ts
import { defineConfig } from "file:///D:/Backups/Project/v-element/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Backups/Project/v-element/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Backups/Project/v-element/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueMacros from "file:///D:/Backups/Project/v-element/node_modules/unplugin-vue-macros/dist/index.mjs";
var vitest_config_default = defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      }
    })
  ],
  // 测试配置
  test: {
    // 全局变量设置为true
    globals: true,
    // 环境设置为jsdom
    environment: "jsdom"
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEJhY2t1cHNcXFxcUHJvamVjdFxcXFx2LWVsZW1lbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEJhY2t1cHNcXFxcUHJvamVjdFxcXFx2LWVsZW1lbnRcXFxcdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQmFja3Vwcy9Qcm9qZWN0L3YtZWxlbWVudC92aXRlc3QuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYWNyb3MnO1xuXG4vLyBWaXRlXHU5MTREXHU3RjZFXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgVnVlTWFjcm9zLnZpdGUoe1xuICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgIHZ1ZTogdnVlKCksXG4gICAgICAgICAgICAgICAgdnVlSnN4OiB2dWVKc3goKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICAvLyBcdTZENEJcdThCRDVcdTkxNERcdTdGNkVcbiAgICB0ZXN0OiB7XG4gICAgICAgIC8vIFx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlx1OEJCRVx1N0Y2RVx1NEUzQXRydWVcbiAgICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgICAgLy8gXHU3M0FGXHU1ODgzXHU4QkJFXHU3RjZFXHU0RTNBanNkb21cbiAgICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbSdcbiAgICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUd0QixJQUFPLHdCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxVQUFVLEtBQUs7QUFBQSxNQUNYLFNBQVM7QUFBQSxRQUNMLEtBQUssSUFBSTtBQUFBLFFBQ1QsUUFBUSxPQUFPO0FBQUEsTUFDbkI7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUE7QUFBQSxFQUVBLE1BQU07QUFBQTtBQUFBLElBRUYsU0FBUztBQUFBO0FBQUEsSUFFVCxhQUFhO0FBQUEsRUFDakI7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
