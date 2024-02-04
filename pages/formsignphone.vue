<template>
  <div>
    <headerbar />
    <div class="main-wrap">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="blur"> </v-col>
          <v-col cols="12" md="4"
            ><div>
              <div class="headfont">Registration</div>
              <v-form ref="form">
                <div class="label-field">First Name</div>
                <v-text-field
                  ref="name"
                  v-model="name"
                  dense
                  outlined
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  placeholder="Firstname"
                  required
                ></v-text-field>
                <div class="label-field">Last name</div>
                <v-text-field
                  ref="lastname"
                  v-model="lastname"
                  dense
                  outlined
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  placeholder="Lastname"
                  required
                ></v-text-field>
                <div class="label-field">Address</div>
                <v-text-field
                  ref="address"
                  v-model="address"
                  :rules="[
                    () => !!address || 'This field is required',
                    () =>
                      (!!address && address.length <= 50) ||
                      'Address must be less than 50 characters',
                    addressCheck,
                  ]"
                  placeholder="ex.1/12 m.2 "
                  dense
                  outlined
                ></v-text-field>
                <div class="label-field">Zip</div>
                <v-text-field
                  ref="zip"
                  v-model="zip"
                  :rules="[() => !!zip || 'This field is required']"
                  required
                  placeholder="ex.10101"
                  dense
                  outlined
                ></v-text-field>
                <div class="label-field">Province</div>
                <v-autocomplete
                  ref="province"
                  v-model="province"
                  :items="provinces"
                  :rules="[() => !!province || 'This field is required']"
                  dense
                  outlined
                  required
                ></v-autocomplete>
                <div class="label-field">Password</div>
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!zip || 'This field is required']"
                  outlined
                  dense
                  required
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show2 = !show2"
                ></v-text-field>
                <div class="label-field">Confirm Password</div>
                <v-text-field
                  ref="conpassword"
                  v-model="conpassword"
                  :rules="[() => !!zip || 'This field is required']"
                  outlined
                  dense
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show2 ? 'text' : 'password'"
                  required
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-form>
              <v-divider></v-divider>
              <br />
              <div>
                <v-btn color="warning" @click="resetForm">Reset</v-btn>
                <v-btn color="success" @click="submit">Confirm</v-btn>
              </div>
            </div></v-col
          >
          <v-col cols="12" md="4" class="blur"> </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import headerbar from '../components/headerbar_1.vue'

export default {
  components: { headerbar },
  data: () => ({
    provinces: ['Bangkok', 'Pathumthani', 'Chonburi'],
    errorMessages: '',
    name: '',
    lastname: '',
    address: null,
    zip: null,
    province: '',
    formHasErrors: false,
    show1: false,
    show2: false,
    password: '',
    conpassword: '',
  }),
  computed: {
    form() {
      return {
        name: this.name,
        lastname: this.name,
        address: this.address,
        zip: this.zip,
        province: this.province,
        password: this.password,
        conpassword: this.conpassword,
      }
    },
  },
  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages = this.address && !this.name ? `Hey! I'm required` : ''

      return true
    },
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true
        this.$refs[f].validate(true)
      })
    },
  },
}
</script>

<style scoped>
.headfont {
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  color: #f55085;
  padding-top: 20px;
  padding-bottom: 20px;
}
.label-field {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #161616;
}
.regis-container {
  padding-left: 30%;
  padding-right: 30%;
}
.blur {
  filter: blur(2px);
  position: static;
  background-image: url(https://cdn.vuetifyjs.com/images/cards/plane.jpg);
}
</style>