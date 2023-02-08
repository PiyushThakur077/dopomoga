<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header  class="zr-header-all">

      <div class="q-pa-md">

<div class="row vertical-middle">
  <div class="col vertical-middle">
    <img class="zr_app_logo" src="http://cso9.com/wp-content/uploads/2023/02/logo.jpg"/>
  </div>


  <div class="col text-right vertical-middle" style="justify-content: flex-end;
    align-items: center; display: flex;">
    <div class="q-gutter-x-sm">
      <q-btn round to="/profile">
        <q-avatar >
          <img src="http://cso9.com/wp-content/uploads/2023/02/user_image.jpg" />
        </q-avatar>
      </q-btn>
      </div>
  </div>
</div></div>
  </q-header> -->


    <!-- <q-footer class="bg-white" bordered>

          <q-tabs class="text-grey-10" active-color="primary" indicator-color="transparent">
        <q-route-tab name="home" icon="eva-home-outline" label="Home" to="/"/>
        <q-route-tab name="donation" icon="alarm" label="Donation" to="/donation" />
        <q-route-tab name="edopomoga" icon="movie" label="eDopomoga" to="/edopomoga" />
      </q-tabs>

      </q-footer> -->





    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [

]

export default defineComponent({
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style lang="sass">
.q-footer
  .q-tab__icon
    font-size: 30px

.q-footer
  .q-tab__label
    font-size: 12px
    font-weight: 500
    margin-top: 5px

.zr_app_logo
  width: 100%

.q-header
    background-color: #F3F3F3

</style>
