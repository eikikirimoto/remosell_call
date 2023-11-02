<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useCommonStore } from 'src/stores/common-store'
import { usePhoneStore } from 'src/stores/phone-store'
import { LS } from 'src/utils/WebStorage'
import { isAllUAOptionsSet, UAOptionsOf } from 'src/model/PhoneModel'

export default defineComponent({
  methods: {
    ...mapActions(useCommonStore, ['setLang']),
    ...mapActions(usePhoneStore, ['setUAOptions']),
    setCurrentLang (lang: string) {
      this.$i18n.locale = lang
      LS.set(LS.KEY.LANG, lang)
    }
  },
  computed: {
    ...mapState(useCommonStore, ['lang']),
    ...mapState(usePhoneStore, ['uaOptions']),
    fullPath () {
      return this.$route.fullPath
    }
  },
  watch: {
    lang (nval) {
      this.setCurrentLang(nval)
    },
    fullPath () {
      const q = this.$route.query
      if (isAllUAOptionsSet(q)) {
        const uaOptions = UAOptionsOf(q)
        this.setUAOptions(uaOptions)
      }
    }
  },
  created () {
    this.setLang(this.lang)
    this.setCurrentLang(this.lang)
  }
})
</script>
