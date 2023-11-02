import { LocalStorage } from 'quasar'

export const LS = {
  KEY: {
    LANG: 'LANG',
    PHONE_TAB: 'PHONE_TAB',
    SETTINGS_TAB: 'SETTINGS_TAB',
    UA_OPTIONS: 'UA_OPTIONS'
  },
  set: <T>(k: string, v: T) => LocalStorage.set(`__${k}`, v),
  get: <T>(k: string) => {
    const r = LocalStorage.getItem(`__${k}`)
    if (r === null) return null
    return r as T
  }
}
