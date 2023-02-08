<template>
<q-header class="zr-header-profile zr-back-btn q-pt-md">
        <q-toolbar>
          <q-btn flat to="/"  icon="eva-arrow-ios-back-outline" class="q-mr-sm" />
          <q-toolbar-title class="text-center">Profile</q-toolbar-title>
          <q-btn flat  icon="eva-settings-2-outline" />
        </q-toolbar>
  </q-header>




    <div class="row bg-light-shade">
      <div class="col-12 q-pa-md ">
        <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar  size="80px">
          <img src="http://cso9.com/wp-content/uploads/2023/02/user_image.jpg" />

        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="zr-profile-name">Mike Smith</q-item-label>
        <q-item-label >London | <span>29 years old</span></q-item-label>
      </q-item-section>
      <!-- <q-item-section side>
        3 min ago
      </q-item-section> -->
    </q-item>


<div class="row q-pa-md">
<div class="col-4 text-center">
<q-item clickable v-ripple>
<q-item-section>
<div class="zr-inline-block">
  <q-item-label class="zr-profile-name">5</q-item-label>
  <q-icon name="eva-cloud-download-outline" />
</div>
<p class="zr-dtl">Awards</p>
</q-item-section>
</q-item>
  </div>
  <div class="col-4 text-center">
<q-item clickable v-ripple>
<q-item-section>
<div class="zr-inline-block">
  <q-item-label class="zr-profile-name">7</q-item-label>
  <q-icon name="eva-people-outline" />
</div>
<p class="zr-dtl">People</p>
</q-item-section>
</q-item>
  </div>
  <div class="col-4 text-center">
<q-item clickable v-ripple>
<q-item-section>
<div class="zr-inline-block">
  <q-item-label class="zr-profile-name">2</q-item-label>
  <q-icon name="eva-layout-outline" />
</div>
<p class="zr-dtl">Projects</p>
</q-item-section>
</q-item>
  </div>
</div>







      </div>


    </div>




















</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePage'
})
</script>
<style lang="sass">
// .zr-header-all
//   display: none
.zr-back-btn
  .q-icon
    color: #333333

  .q-btn:before
    box-shadow: none
  .q-btn
    padding: 0
    font-size: 20px
  .q-toolbar__title
    color: #333333

.zr-profile-name
  font-size: 22px
  font-weight: 500
  color: #1F222A

.bg-light-shade
  background-color: #f3f3f3

.zr-inline-block
  display: inline-flex
  align-content: space-around
  align-items: center
  text-align: center
  justify-content: center
  .q-item__label
    font-size: 25px
    margin-right: 5px
  .q-icon
    font-size: 35px
    font-weight: 200
.zr-dtl
  margin-bottom: 0

</style>
