<template>
  <q-header class="zr-header-profile zr-back-btn q-pt-md">
    <q-toolbar>
      <q-btn flat to="/" icon="eva-arrow-ios-back-outline" class="q-mr-sm" />
      <q-toolbar-title class="text-center">Login</q-toolbar-title>
      <q-btn flat icon="eva-info-outline" />
    </q-toolbar>
  </q-header>

  <div class="row bg-light-shade">
    <div class="col-12 q-pa-md zr-hghth">
      <h4 class="zr-cstm-profile">Enter Your Mobile Number</h4>

      <div class="">
        <div class="q-pt-md zr-help-dv">
          <q-card class="">
            <div class="zr-profile-detail">
              <img
                src="http://cso9.com/wp-content/uploads/2023/02/need-help.webp"
              />
            </div>

            <q-card-section class="">
              <div class="zr-suprt-txt text-center">
                <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-md zr-login-form"
                >
                  <q-input
                    filled
                    v-model="phone"
                    label="Phone Number *"
                    mask="(###) ### - ####"
                    hint="Example: (###) ### - ####"
                    lazy-rules
                  />

                  <div>
                    <q-btn
                      label="Send OTP"
                      type="submit"
                      color="primary"
                      class="zr-dnt-btn"
                      to="/otp"
                    />
                  </div>
                </q-form>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupPage",
});
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

.zr-cstm-profile
  font-weight: 300
  font-size: 40px

.zr-profile-detail
  display: flex
  justify-content: space-around
  .q-avatar
    margin-top: -10%

.zr-help-dv
  .q-card
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 7%), 0 1px 1px -2px rgb(0 0 0 / 7%)
    border-radius: 13px
    background-color: #eef2fc

.zr-hghth
  height: 92vh !important

.zr-suprt-txt h4
  margin: 20px 0px

.zr-login-form
  padding-top: 14%
.zr-dnt-btn
  width: 100%

.zr-login-form
  .q-field--filled .q-field__control
    border-bottom: 1px solid
    background-color: transparent

.zr-profile-detail img
  margin-top: -16%
  width: 27%
</style>
