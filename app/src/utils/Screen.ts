import { Screen } from 'quasar'
import { computed, ComputedRef } from 'vue'

Screen.setSizes({ sm: 450, md: 600, lg: 1000, xl: 2000 })

export const isMobile: ComputedRef<boolean> = computed((): boolean => {
  return Screen.lt.sm
})
export const isTablet: ComputedRef<boolean> = computed((): boolean => {
  return (Screen.sm || Screen.gt.sm) && Screen.lt.md
})
export const isPc: ComputedRef<boolean> = computed((): boolean => {
  return Screen.md || Screen.gt.md
})
export const screenFullWidth: ComputedRef<number> = computed((): number => {
  return Screen.width
})
