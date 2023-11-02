<template>
  <q-list padding>
    <q-item clickable v-ripple class="text-dark" :class="{'bg-grey-3': path === `/${Page.PHONE.URI}`}" :to="Page.PHONE.URI">
      <q-item-section avatar>
        <q-avatar color="dark" text-color="white">
          <q-icon color="white" name="phone_iphone" />
        </q-avatar>
      </q-item-section>
      <q-item-section>{{$t('phone.title')}}</q-item-section>
    </q-item>
    <q-item clickable v-ripple class="text-dark" :class="{'bg-grey-3': path === `/${Page.SETTINGS.URI}`}" :to="Page.SETTINGS.URI">
      <q-item-section avatar>
        <q-avatar color="dark" text-color="white">
          <q-icon color="white" name="settings" />
        </q-avatar>
      </q-item-section>
      <q-item-section>{{$t('settings.title')}}</q-item-section>
    </q-item>
  </q-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Page from 'src/enums/Page'

export default defineComponent({
  setup () {
    return {
      Page
    }
  },
  computed: {
    path () {
      return this.$route.path
    }
  }
})
</script>
