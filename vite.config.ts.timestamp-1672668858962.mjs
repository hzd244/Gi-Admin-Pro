// vite.config.ts
import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+vite@4.0.3_yrqhxi7ycouuqk7iciarqamc6e/node_modules/vite/dist/node/index.js";
import vue from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.0.0_vite@4.0.3+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import path from "path";
import VueSetupExtend from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vue-setup-extend@0.4.0_vite@4.0.3/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-svg-icons@2.0.1_vite@4.0.3/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { ArcoResolver } from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import AutoImport from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.12.1_@vueuse+core@9.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import { viteMockServe } from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-mock@2.9.6_mockjs@1.1.0+vite@4.0.3/node_modules/vite-plugin-mock/dist/index.js";
import vueJsx from "file:///H:/1.front-learn/2.workplace/Gi-Admin/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.0_vite@4.0.3+vue@3.2.45/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///H:/1.front-learn/2.workplace/Gi-Admin/vite.config.ts";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      vue(),
      vueJsx(),
      VueSetupExtend(),
      AutoImport({
        resolvers: [ArcoResolver()],
        imports: ["vue"],
        dts: "src/auto-import.d.ts"
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ],
        dirs: ["src/components"],
        extensions: ["vue"],
        dts: "src/components.d.ts"
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
        prodEnabled: command !== "serve" && true,
        injectCode: `
          import { setupProdMockServer } from '../mock/index';
          setupProdMockServer();
        `
      })
    ],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", __vite_injected_original_import_meta_url)),
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/var.scss";`
        }
      }
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path2) => path2.replace(/^\/api/, "/api")
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFwxLmZyb250LWxlYXJuXFxcXDIud29ya3BsYWNlXFxcXEdpLUFkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJIOlxcXFwxLmZyb250LWxlYXJuXFxcXDIud29ya3BsYWNlXFxcXEdpLUFkbWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9IOi8xLmZyb250LWxlYXJuLzIud29ya3BsYWNlL0dpLUFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuaW1wb3J0IHsgQXJjb1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICB2dWVKc3goKSxcbiAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbQXJjb1Jlc29sdmVyKCldLFxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZSddLFxuICAgICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnQuZC50cycsXG4gICAgICB9KSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgICBBcmNvUmVzb2x2ZXIoe1xuICAgICAgICAgICAgc2lkZUVmZmVjdDogdHJ1ZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgZGlyczogWydzcmMvY29tcG9uZW50cyddLFxuICAgICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgICBkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcbiAgICAgIH0pLFxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2ljb25zJyldLFxuICAgICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICAgIH0pLFxuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIG1vY2tQYXRoOiAnbW9jaycsXG4gICAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gJ3NlcnZlJyxcbiAgICAgICAgcHJvZEVuYWJsZWQ6IGNvbW1hbmQgIT09ICdzZXJ2ZScgJiYgdHJ1ZSxcbiAgICAgICAgLy8gXHU4RkQ5XHU2ODM3XHU1M0VGXHU0RUU1XHU2M0E3XHU1MjM2XHU1MTczXHU5NUVEbW9ja1x1NzY4NFx1NjVGNlx1NTAxOVx1NEUwRFx1OEJBOW1vY2tcdTYyNTNcdTUzMDVcdTUyMzBcdTY3MDBcdTdFQzhcdTRFRTNcdTc4MDFcdTUxODVcbiAgICAgICAgaW5qZWN0Q29kZTogYFxuICAgICAgICAgIGltcG9ydCB7IHNldHVwUHJvZE1vY2tTZXJ2ZXIgfSBmcm9tICcuLi9tb2NrL2luZGV4JztcbiAgICAgICAgICBzZXR1cFByb2RNb2NrU2VydmVyKCk7XG4gICAgICAgIGAsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICd+JzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBcdTVGMTVcdTUxNjVzYXNzXHU1MTY4XHU1QzQwXHU2ODM3XHU1RjBGXHU1M0Q4XHU5MUNGXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXIuc2Nzc1wiO2AsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX0FQUF9CQVNFX1VSTCwgLy8gXHU1NDBFXHU1M0YwXHU2NzBEXHU1MkExXHU1NjY4XHU1NzMwXHU1NzQwXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTUxNDFcdThCQjhcdTRFMERcdTU0MENcdTZFOTBcbiAgICAgICAgICBzZWN1cmU6IGZhbHNlLCAvLyBcdTY1MkZcdTYzMDFodHRwc1xuICAgICAgICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hcGknKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxlQUFlLFdBQVc7QUFDNVUsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG9CQUFvQjtBQUMzQixTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFlBQVk7QUFWc0ssSUFBTSwyQ0FBMkM7QUFZMU8sSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUNqRCxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLFFBQzFCLFNBQVMsQ0FBQyxLQUFLO0FBQUEsUUFDZixLQUFLO0FBQUEsTUFDUCxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXO0FBQUEsVUFDVCxhQUFhO0FBQUEsWUFDWCxZQUFZO0FBQUEsVUFDZCxDQUFDO0FBQUEsUUFDSDtBQUFBLFFBQ0EsTUFBTSxDQUFDLGdCQUFnQjtBQUFBLFFBQ3ZCLFlBQVksQ0FBQyxLQUFLO0FBQUEsUUFDbEIsS0FBSztBQUFBLE1BQ1AsQ0FBQztBQUFBLE1BQ0QscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxXQUFXLENBQUM7QUFBQSxRQUNuRCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsTUFDRCxjQUFjO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixjQUFjLFlBQVk7QUFBQSxRQUMxQixhQUFhLFlBQVksV0FBVztBQUFBLFFBRXBDLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlkLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQ2pELEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsVUFDTixRQUFRLElBQUk7QUFBQSxVQUNaLGNBQWM7QUFBQSxVQUNkLFFBQVE7QUFBQSxVQUNSLFNBQVMsQ0FBQUEsVUFBUUEsTUFBSyxRQUFRLFVBQVUsTUFBTTtBQUFBLFFBQ2hEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
