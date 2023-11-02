import { defineStore } from 'pinia'
import { UAOptions } from 'src/model/PhoneModel'
import { LS } from 'src/utils/WebStorage'

export const usePhoneStore = defineStore('phone', {
  state: () => ({
    uaOptions: LS.get<UAOptions>(LS.KEY.UA_OPTIONS) || {} as UAOptions
  }),
  getters: {},
  actions: {
    setUAOptions (uaOptions: UAOptions) {
      this.uaOptions = uaOptions
      LS.set(LS.KEY.UA_OPTIONS, uaOptions)
    },
  },
})
