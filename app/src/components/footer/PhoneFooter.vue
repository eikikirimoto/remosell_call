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
        <q-tab :name="Tab.PHONE.CALL.name" :icon="Tab.PHONE.CALL.icon" :label="$t('phone.tab.call')" />
      </q-tabs>
      <q-space ></q-space>
      <q-btn flat round dense icon="apps" class="q-mr-sm" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useCommonStore } from 'src/stores/common-store'
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
      tab: commonStore.phoneTab
    }
  },
  methods: {
    ...mapActions(useCommonStore, ['toggleRightDrawer', 'setPhoneTab'])
  },
  watch: {
    tab (nval: string): void {
      this.setPhoneTab(nval)
    }
  },
  created () {
    this.setPhoneTab(this.tab)
  }
})
</script>
