<template>
  <q-page class="row items-center justify-evenly">
    <SettingsHeader>
      <SettingsDrawer />
    </SettingsHeader>
    <div class="__remosell-page-container">
      <SettingsContainer />
    </div>
    <SettingsFooter />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SettingsHeader from 'components/header/SettingsHeader.vue';
import SettingsDrawer from 'components/drawer/SettingsDrawer.vue';
import SettingsContainer from 'components/container/SettingsContainer.vue';
import SettingsFooter from 'components/footer/SettingsFooter.vue';

export default defineComponent({
  components: {
    SettingsHeader,
    SettingsDrawer,
    SettingsContainer,
    SettingsFooter,
  },
});
</script>
