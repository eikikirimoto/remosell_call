<template>
  <div class="text-h6">{{$t('settings.panel_title.common')}}</div>
  <q-list>
      <q-item-label header></q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>日本語</q-item-label>
          <q-item-label caption>Japanese mode.</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="dark" v-model="isLangJa" val="friend" />
        </q-item-section>
      </q-item>
  </q-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useCommonStore } from 'src/stores/common-store'
import Lang from 'src/enums/Lang'

export default defineComponent({
  methods: {
    ...mapActions(useCommonStore, ['setLang'])
  },
  computed: {
    ...mapState(useCommonStore, ['lang']),
    isLangJa: {
      get () { return this.lang == Lang.JA },
      set (nval: boolean) {
        if (nval) this.setLang(Lang.JA)
        else this.setLang(Lang.EN_US)
      }
    }
  }
})
</script>
