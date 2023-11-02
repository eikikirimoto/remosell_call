<template>
  <q-page class="row items-center justify-evenly">
    <PhoneHeader>
      <PhoneDrawer />
    </PhoneHeader>
    <div class="__remosell-page-container">
      <PhoneContainer />
    </div>
    <PhoneFooter />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PhoneHeader from 'components/header/PhoneHeader.vue';
import PhoneDrawer from 'components/drawer/PhoneDrawer.vue';
import PhoneContainer from 'components/container/PhoneContainer.vue';
import PhoneFooter from 'components/footer/PhoneFooter.vue';

export default defineComponent({
  components: {
    PhoneHeader,
    PhoneDrawer,
    PhoneContainer,
    PhoneFooter,
  },
});
</script>
