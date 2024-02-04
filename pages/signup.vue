<template>
  <div>
    <headerbar />
    <div class="main-wrap">
      <div class="container">
        <div class="zone-left">
          <div class="headfont">Sign Up!</div>
          <div class="zone-tap">
            <v-btn
              value="btn1"
              class="btntel"
              style="margin-right: 10px"
              :class="{ active: activebtn === 'btn1' }"
              @click="activebtn = 'btn1'"
              >Sign up with phone number</v-btn
            >
            <v-btn
              value="btn2"
              class="btntel"
              :class="{ active: activebtn === 'btn2' }"
              @click="activebtn = 'btn2'"
              >Sign up with email</v-btn
            >
          </div>
          <div
            v-if="phoneType"
            v-show="activebtn === 'btn1'"
            class="zone-enter"
          >
            <!-- <div class="label-field" v-show="dataType">{{ dataType }}</div> -->
            <div class="label-field">Phone number</div>

            <div class="zone-input">
              <v-text-field
                :rules="[namerules.required]"
                hint="At least 10 characters"
                type="tel"
                minlength="10"
                maxlength="10"
                outlined
                dense
              ></v-text-field>

              <div style="padding-left: 2%">
                <v-btn
                  class="btnlog"
                  style="background-color: #f55085"
                  href="/formsignphone"
                  >Continue</v-btn
                >
              </div>
            </div>
          </div>
          <div
            v-if="emailType"
            v-show="activebtn === 'btn2'"
            class="zone-enter"
          >
            <!-- <div class="label-field" v-show="dataType">{{ dataType }}</div> -->
            <div class="label-field">Email</div>
            <div class="zone-input">
              <v-text-field
                v-model="email"
                outlined
                dense
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <div>
                <v-btn class="btnlog" style="background-color: #f55085"
                  >Continue</v-btn
                >
              </div>
            </div>
          </div>
          <div class="zone-login">
            <div class="text-title">Already have an account?</div>
            <div class="text-center">
              <a href="/login" class="link-login my-auto">Log In</a>
            </div>
          </div>
        </div>
        <div class="zone-right">
          <div><v-img src="/bg-main-d2.jpeg"></v-img></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerbar from '../components/headerbar_1.vue'
export default {
  components: { headerbar },

  data() {
    return {
      phoneType: true,
      emailType: true,
      activebtn: 'btn1',
      email: '',
      // dataType: 'Phone number',
      namerules: {
        required: (value) => !!value || 'Required.',
      },
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  // toggletype(type) {
  //   // this.phone = !this.email
  //   if (this.phoneType) {
  //     this.phoneType = false
  //   } else this.phoneType = true
  // },
}
</script>

  <style scoped>
.container {
  display: flex;
}
.zone-left {
  max-width: 576px;
  padding: 80px 79px 80px 88px;
}
.zone-right {
  position: relative;
  width: 50%;
}
.main-wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
}
.headfont {
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  color: #6d50f5;
}
.zone-tap {
  display: flex;
  margin-top: 40px;
  margin-bottom: 24px;
}
.zone-enter {
  margin-top: 24px;
}
.zone-input {
  display: flex;
  align-items: baseline;
}
.label-field {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #161616;
}
.btnlog {
  color: white;
  margin-left: 12px;
  font-size: 13px !important;
  letter-spacing: 0;
  padding: 10px 16px !important;
  border-radius: 6px;
}
.btntel {
  background: #ededed;
  color: #8b8b8b;
  border-radius: 6px;
  font-size: 13px !important;
  letter-spacing: 0;
  white-space: normal;
  display: inline-block;
}
.active {
  background: #dfd9fd;
  color: #6d50f5;
}
.zone-login {
  margin-top: 60px;
  display: flex;
}
.text-title {
  font-size: 16px;
  color: #161616;
}
.text-center {
  text-align: center !important;
}
.link-login {
  text-decoration: none;
  font-size: 16px;
  color: #6d50f5;
  margin-left: 12px;
}
</style>