import { defineStore } from 'pinia'
import Lang from 'src/enums/Lang'
import { LS } from 'src/utils/WebStorage'
import Tab from 'src/enums/Tab'

export const useCommonStore = defineStore('common', {
  state: () => ({
    lang: LS.get<string>(LS.KEY.LANG) || Lang.JA,
    rightDrawerOpen: false,
    phoneTab: LS.get<string>(LS.KEY.PHONE_TAB) || Tab.PHONE.CALL.name,
    settingsTab: LS.get<string>(LS.KEY.SETTINGS_TAB) || Tab.SETTINGS.COMMON.name
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setLang (lang: string) {
      this.lang = lang
    },
    toggleRightDrawer () {
      this.rightDrawerOpen = !this.rightDrawerOpen
    },
    setPhoneTab (tab: string) {
      this.phoneTab = tab
      LS.set(LS.KEY.PHONE_TAB, tab)
    },
    setSettingsTab (tab: string) {
      this.settingsTab = tab
      LS.set(LS.KEY.SETTINGS_TAB, tab)
    },
  },
})
