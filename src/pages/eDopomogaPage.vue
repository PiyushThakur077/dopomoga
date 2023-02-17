<template>
  <q-page class="flex flex-center">
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
    <q-header class="zr-header-all">
      <div class="q-pa-md">
        <div class="row vertical-middle">
          <div class="col vertical-middle">
            <img
              class="zr_app_logo"
              src="http://cso9.com/wp-content/uploads/2023/02/logo.jpg"
            />
          </div>

          <div
            class="col text-right vertical-middle"
            style="
              justify-content: flex-end;
              align-items: center;
              display: flex;
            "
          >
            <div class="q-gutter-x-sm">
              <q-btn round to="/signup">
                <q-avatar>
                  <img
                    src="http://cso9.com/wp-content/uploads/2023/02/anonymous.png"
                  />
                </q-avatar>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </q-header>
    <h5>eDopomoga Page</h5>

    <q-footer class="bg-white" bordered>
      <q-tabs
        class="text-grey-10"
        active-color="primary"
        indicator-color="transparent"
      >
        <q-route-tab name="home" icon="eva-home-outline" label="Home" to="/" />
        <q-route-tab
          name="donation"
          icon="alarm"
          label="Donation"
          to="/donation"
        />
        <q-route-tab
          name="edopomoga"
          icon="movie"
          label="eDopomoga"
          to="/edopomoga"
        />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "eDopomogaPage",
});
</script>
