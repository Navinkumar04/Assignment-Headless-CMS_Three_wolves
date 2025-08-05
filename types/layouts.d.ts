import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/nk707/Downloads/Headless-CMS-test-main/Headless-CMS-test-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}