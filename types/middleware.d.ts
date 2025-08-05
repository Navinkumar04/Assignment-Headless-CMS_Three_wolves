import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/nk707/Downloads/Headless-CMS-test-main/Headless-CMS-test-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}