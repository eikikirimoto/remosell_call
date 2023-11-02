<template>
  <q-header class="bg-white text-dark">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      <q-toolbar-title>
        {{$t('phone.title')}}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated :width="drawerWidth">
    <slot />
  </q-drawer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { isMobile, screenFullWidth } from 'src/utils/Screen'

export default defineComponent({
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  },
  computed: {
    drawerWidth (): number {
      if (isMobile.value) return screenFullWidth.value - 40
      else return 350
    }
  },
})
</script>
