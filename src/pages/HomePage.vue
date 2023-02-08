<template>
  <!-- <q-page class="flex flex-center">
<h5>HomePage</h5>
  </q-page> -->
  <q-header  class="zr-header-all">

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
</q-header>





  <q-page class="flex ">
    <div class="row ">
    <div class="col-12">
      <div class="text-right">
        <img class="zr-peace_bird" src="http://cso9.com/wp-content/uploads/2023/02/peace_bird.png">
      </div>
      <div class="q-pa-md">
        <h2 class="zr_home_banner">Donate to Ukraine.<br>
Stand up against war.</h2>
<p class="zr-para_home">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
      </div>

      <div class="q-pa-md">
        <div class="bg-white zr_div_styl">
          <img  class="wd-full" src="http://cso9.com/wp-content/uploads/2023/02/clients_01.jpg">
        </div>
      </div>
      <div class="q-pa-md">
        <q-btn unelevated color="primary" label="Donate" class="zr-dnt-btn" />
      </div>



      <div class="bg-white zr_slide-dv">
        <div class="q-pa-md">
          <h5 class="zr-sub-head">Our achievements</h5>

          <q-carousel
      v-model="slide"
      swipeable
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="primary"
      class="rounded-borders "
    >
      <q-carousel-slide name="style" class="column no-wrap flex-left">
        <q-card class="my-card">
      <q-card-section>
        <img src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <h4 class="zr-achv">Over 2500</h4>
        <p class="zr-achv-sub">Donators</p>
      </q-card-section>
    </q-card>
      </q-carousel-slide>


      <q-carousel-slide name="tv" class="column no-wrap flex-left">
        <q-card class="my-card">
      <q-card-section>
        <img src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <h4 class="zr-achv">Over 2500</h4>
        <p class="zr-achv-sub">Donators</p>
      </q-card-section>
    </q-card>
      </q-carousel-slide>


      <q-carousel-slide name="layers" class="column no-wrap flex-left">
        <q-card class="my-card">
      <q-card-section>
        <img src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <h4 class="zr-achv">Over 2500</h4>
        <p class="zr-achv-sub">Donators</p>
      </q-card-section>
    </q-card>
      </q-carousel-slide>

    </q-carousel>

    <!-- <div class="row justify-left q-pl-md">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
        ]"
      />
    </div> -->


        </div>
<!-- <div class="q-pl-md zr-cstm-slide">
        <q-card class="my-card">
      <q-card-section>
        <img src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <h4 class="zr-achv">Over 2500</h4>
        <p class="zr-achv-sub">Donators</p>
      </q-card-section>
    </q-card>




    <q-card class="my-card">
      <q-card-section>
        <img src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <h4 class="zr-achv">Over 2500</h4>
        <p class="zr-achv-sub">Donators</p>
      </q-card-section>
    </q-card>



    <q-card class="my-card">
      <q-card-section>
        <img src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <h4 class="zr-achv">Over 2500</h4>
        <p class="zr-achv-sub">Donators</p>
      </q-card-section>
    </q-card>
</div> -->



<!-- <q-carousel
      color="white"
      arrows
      height="400px"
      v-model="slide"
      swipeable
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide img-src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">First stop</div>
          <div class="q-headline">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide img-src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">Second stop</div>
          <div class="q-headline">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide img-src="http://cso9.com/wp-content/uploads/2023/02/donation_v2.png">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">Third stop</div>
          <div class="q-headline">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel> -->
      </div>




      <div class="q-pa-md bg-white">
        <div class="">
          <h5 class="zr-sub-head">People in need</h5>
        </div>
        <!-- <div class="zr-bg-grey rounded-borders">
          <img class="wd-full" src="http://cso9.com/wp-content/uploads/2023/02/help-01.jpg"/>
          <div class="q-pa-md">

            <p class="zr-suprt-txt">One war - 44 million fates:<br>Personal destinies that <br>need your help</p>
          </div>

          <div class="q-pa-md">
        <q-btn unelevated color="primary" label="Support Individuals" class="zr-dnt-btn" />
      </div>
        </div> -->


        <div class="q-pt-md zr-help-dv">
    <q-card class="">
      <img src="http://cso9.com/wp-content/uploads/2023/02/help-01.jpg">

      <q-card-section class="zr-bg-grey">
        <div class="zr-suprt-txt">One war - 44 million fates:<br>Personal destinies that <br>need your help</div>
        <div class="q-pt-md">
        <q-btn unelevated color="primary" label="Support Individuals" class="zr-dnt-btn" />
      </div>
      </q-card-section>


    </q-card>


</div>




      </div>




      <div class="bg-white zr_slide-dv-2">
        <div class="q-pa-md zr-set-crousel">
          <h5 class="zr-sub-head">Our achievements</h5>

          <q-carousel
      v-model="slide"
      swipeable
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="primary"
      class="rounded-borders "
    >
      <q-carousel-slide name="style" class="column no-wrap flex-left">
        <q-card class="">
      <img src="http://cso9.com/wp-content/uploads/2023/02/girl.webp">

      <q-card-section class="zr-bg-grey zr-dv-pd">
        <div class="zr-suprt-txt">Children in need - donate to Kindergardens in Kyiv</div>
        <div class="q-pt-md zr-progress-bar">
          <q-linear-progress rounded size="12px" :value="progress" color="secondary" class="q-mt-sm q-mb-sm" />
<div class="row">

  <div class="col-6">
            <p>11,200 supporters</p>
          </div>

          <div class="col-6 text-right">
            <strong>74%</strong>
</div>



</div>



        <q-btn unelevated color="primary" label="Donate" class="zr-dnt-btn" />
      </div>
      </q-card-section>


    </q-card>
      </q-carousel-slide>



    </q-carousel>

    <!-- <div class="row justify-left q-pl-md">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
        ]"
      />
    </div> -->
        </div>
      </div>






    </div>



    </div>
  </q-page>

  <q-footer class="bg-white" bordered>

<q-tabs class="text-grey-10" active-color="primary" indicator-color="transparent">
<q-route-tab name="home" icon="eva-home-outline" label="Home" to="/"/>
<q-route-tab name="donation" icon="alarm" label="Donation" to="/donation" />
<q-route-tab name="edopomoga" icon="movie" label="eDopomoga" to="/edopomoga" />
</q-tabs>

</q-footer>
</template>












<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      progress: 0.4,
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?'
    }
  }
}

</script>


<!-- <script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script> -->
<!-- <script> -->




// import { ref } from 'vue'

// export default {
//   setup () {
//     return {
//       controlType: ref('flat'),
//       controlTypeOptions: [
//         { value: 'regular', label: 'regular' },
//         { value: 'unelevated', label: 'unelevated' },
//         { value: 'flat', label: 'flat (default)' },
//         { value: 'outline', label: 'outline' },
//         { value: 'push', label: 'push' }
//       ],

//       slide: ref('style'),
//       lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
//     }
//   }
// }

// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'HomePage'
// })
<!-- </script> -->







<style lang="sass">
.my-card
  width: 100%
  max-width: 250px
  background-color: #1F222A
  color: #ffffff
  text-align: center
  border-radius: 13px
  .zr-achv
    margin: 0
    font-weight: 600
    padding: 15px 0px 0px 0px

.zr-cstm-slide
  display:-webkit-inline-box

.zr-achv-sub
  font-size: 22px
  font-weight: 300

.q-card__section
  padding-top: 40px

.q-page
  background-color: #F3F3F3

.zr_home_banner
  font-size: 30px
  font-weight: 400
  color: #1F222A
  line-height: 1.2
  margin-top: -20%
  margin-bottom: 10px
.zr-peace_bird
  width: 39%

.zr-para_home
  font-size: 14px
  font-weight: 400
  margin-bottom: 0

.wd-full
  width: 100%
.zr_div_styl
  padding: 15px
  border-radius: 10px

.zr-dnt-btn
  width: 100%
  border-radius: 12px
  height: 47px
  font-size: 16px
  font-weight: 400
  text-transform: none

.zr-sub-head
  font-size: 22px
  font-weight: 500
  margin: 0
  padding-top: 0px



.zr_slide-dv
  .q-carousel
    height: 270px
.zr-bg-grey
  background-color: #dcdde2

  // .custom-caption
  //   text-align: center
  //   padding:12px
  //   color:#333
  //   background: rgba(0, 0, 0, .5)

.zr-suprt-txt
  margin-bottom: 0
  font-size: 19px
  line-height: 1.4
  font-weight: 400

.zr-help-dv
  .q-card
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 0px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 4%)
    border-radius: 12px

.zr-help-dv
  .q-card__section
    padding-top: 10px

.zr_slide-dv
  .q-carousel__slide
    padding: 16px 0


.zr_slide-dv-2
  .q-carousel
    height: auto

.zr-dv-pd
  padding-top: 25px

.zr-progress-bar
  .rounded-borders
    border-radius: 8px

.zr-set-crousel
  .q-carousel__slide
    padding: 0
    padding-top: 15px


.zr-set-crousel
  .q-card
    border-radius: 12px
    box-shadow: none
</style>

