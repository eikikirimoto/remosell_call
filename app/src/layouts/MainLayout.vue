<template>
  <q-layout view="lHr lpR fFf">
    <q-drawer v-model="commonStore.rightDrawerOpen" side="right" overlay behavior="mobile" elevated :width="drawerWidth">
      <AppsRightDrawer />
    </q-drawer>
    <q-page-container>
      <!-- <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="1000"
      > -->
        <router-view />
      <!-- </transition> -->
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useCommonStore } from 'src/stores/common-store'
import AppsRightDrawer from 'src/components/drawer/AppsRightDrawer.vue'
import Page from 'src/enums/Page'
import { isMobile, screenFullWidth } from 'src/utils/Screen'

const commonStore = useCommonStore()

export default defineComponent({
  preFetch ({ currentRoute, redirect }) {
    if (currentRoute.path === '/') {
      redirect(Page.PHONE.URI)
    }
  },
  components: {
    AppsRightDrawer
  },
  setup () {
    return {
      commonStore
    }
  },
  computed: {
    drawerWidth (): number {
      if (isMobile.value) return screenFullWidth.value - 40
      else return 350
    }
  },
  created () {
    if (this.$route.path == '/') {
      this.$router.push(Page.PHONE.URI)
    }
  }
})
</script>
