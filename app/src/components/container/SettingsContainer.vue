<template>
  <q-tab-panels v-model="settingsTab" animated>
    <q-tab-panel :name="Tab.SETTINGS.COMMON.name">
      <SettingsCommonPanel />
    </q-tab-panel>
  </q-tab-panels>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useCommonStore } from 'stores/common-store'
import Tab from 'src/enums/Tab'
import SettingsCommonPanel from 'src/components/panel/SettingsCommonPanel.vue'

export default defineComponent({
  setup () {
    return {
      Tab
    }
  },
  components: {
    SettingsCommonPanel
  },
  computed: {
    ...mapState(useCommonStore, ['settingsTab'])
  }
})
</script>
