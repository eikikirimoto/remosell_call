<template>
  <q-tab-panels v-model="phoneTab" animated>
    <q-tab-panel :name="Tab.PHONE.CALL.name"> aaa </q-tab-panel>
  </q-tab-panels>
</template>
<script lang="ts">
import { mapState } from 'pinia';
import { defineComponent } from 'vue';
import { useCommonStore } from 'src/stores/common-store';
import { usePhoneStore } from 'src/stores/phone-store';
import Tab from 'src/enums/Tab';

export default defineComponent({
  setup() {
    return {
      Tab,
    };
  },
  computed: {
    ...mapState(useCommonStore, ['phoneTab']),
    ...mapState(usePhoneStore, ['uaOptions']),
  },
});
</script>
