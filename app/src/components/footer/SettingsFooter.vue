<template>
  <q-footer bordered class="bg-white text-dark">
    <q-toolbar style="padding: 0;">
      <q-tabs
        v-model="tab"
        switch-indicator
        indicator-color="dark"
        class="text-dark"
        dense
      >
        <q-tab :name="Tab.SETTINGS.COMMON.name" :icon="Tab.SETTINGS.COMMON.icon" :label="$t('settings.tab.common')" />
      </q-tabs>
      <q-space ></q-space>
      <q-btn flat round dense icon="apps" class="q-mr-sm" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useCommonStore } from 'stores/common-store'
import Tab from 'src/enums/Tab'

const commonStore = useCommonStore()

export default defineComponent({
  setup () {
    return {
      Tab
    }
  },
  data () {
    return {
      tab: commonStore.settingsTab
    }
  },
  methods: {
    ...mapActions(useCommonStore, ['toggleRightDrawer', 'setSettingsTab'])
  },
  watch: {
    tab (nval: string): void {
      this.setSettingsTab(nval)
    }
  },
  created () {
    this.setSettingsTab(this.tab)
  }
})
</script>
