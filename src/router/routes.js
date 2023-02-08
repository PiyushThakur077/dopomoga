
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/profile', component: () => import('pages/ProfilePage.vue') },
      { path: '/donation', component: () => import('pages/DonationPage.vue') },
      { path: '/edopomoga', component: () => import('pages/eDopomogaPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
