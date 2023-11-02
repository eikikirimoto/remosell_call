import { RouteRecordRaw } from 'vue-router'
import Page from 'src/enums/Page'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', alias: Page.PHONE.URI, component: () => import('src/pages/PhonePage.vue') },
      { path: Page.PHONE.URI, component: () => import('src/pages/PhonePage.vue') },
      { path: Page.SETTINGS.URI, component: () => import('src/pages/SettingsPage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
