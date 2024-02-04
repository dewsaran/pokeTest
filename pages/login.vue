<template>
  <div>
    <headerbar />
    <div class="main-wrap">
      <div class="container">
        <div class="zone-left">
          <div class="headfont">Let's login</div>
          <div class="zone-tap"></div>
          <div class="zone-enter">
            <div class="label-field">Phone number</div>
            <div class="zone-input">
              <v-text-field
                v-model="telnumnb"
                outlined
                dense
                :rules="[() => !!telnumb || 'This field is required']"
              ></v-text-field>
            </div>
            <div class="label-field">Password</div>
            <div class="zone-input">
              <v-text-field
                v-model="password"
                outlined
                dense
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                :rules="[() => !!password || 'This field is required']"
                required
                @click:append="show2 = !show2"
              ></v-text-field>
            </div>
            <div>
              <v-btn
                href=""
                block
                class="btnlog"
                style="background-color: #f55085"
                >Sign in</v-btn
              >
            </div>
          </div>
        </div>
        <div class="zone-right">
          <div><v-img src="/bg-main-d.jpeg"></v-img></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerbar from '../components/headerbar_1.vue'
// const cards = [
//   {
//     title: 'Pre-fab homes',
//     subtitle: 'Thailand',
//     body: 'Bababababa malalalalama bu',
//     rating: 5,
//     views: 2020,
//   },
//   {
//     title: 'Favorite road trips',
//     subtitle: 'England',
//     body: 'Bamamamlaow',
//     rating: 2.5,
//     views: 200,
//   },
// ]

// ARRAY forEach find findindex filter
// cards.forEach((v) => console.log('foreach', v))
// const found = cards.find((x) => x.rating > 3)
// console.log('find', found)
// const founds = cards.findIndex((z) => z.rating > 3)
// console.log('findindex', founds)
// const filt = cards.filter((y) => y.subtitle === 'England')
// console.log('filter', filt)

// push insert data in array
// const name = ['dew', 'warm', 'tee']
// const count = name.push('malabu')
// console.log(count)
// console.log(name)
// name.push('bababu')
// console.log('push', name)

// pop remove last data in array
// console.log(name.pop())
// console.log('pop', name)

// shift remove first data in array
// console.log(name.shift())
// console.log('shift', name)

//

// map สามารถเปลี่ยนแปลงข้อมูล
// const scores = [1, 2, 3, 4, 5, 6]
// const passfail = scores.map((score) => {
//   if (score >= 4) {
//     return 'pass'
//   }
//   return 'fail'
// })
// console.log('map', passfail)
// console.log(scores)

// reduce การรวมข้อมูลเป็นก้อนเดียว
// const sums = scores.reduce((sum, score) => {
//   return sum + score
// })
// console.log(sums)

// every ใช้ตรวจสอบข้อมูลตรงตามเงื่อนไขหรือไม่ หากทุกข้อมูลที่ตรงตามเงื่อนไขจะขึ้น true
// const chck = scores.every((all) => {
//   return all >= 1
// })
// console.log(chck)

// some ใช้ตรวจสอบบางข้อมูลตรงตามเงื่อนไขหรือไม่ หากมีข้อมูลที่ตรงตามเงื่อนไขจะขึ้น true
// const chcksome = scores.some((sm) => {
//   return sm >= 4
// })
// console.log(chcksome)

// Method function in object
// const dog = {
//   name: 'mui',
//   color: 'White',
//   weight: 1.2,
//   talk() {
//     console.log(this.name + ' bok bok ')
//   },
//   weightDetail() {
//     if (this.weight < 1) {
//       return 'Slim'
//     } else if (this.weight > 2) {
//       return 'Fat'
//     }
//     return 'Normal'
//   },
// }
// dog.talk()
// console.log(dog.weightDetail())

// Constructor Function
// function Doggie(name, color, weight) {
//   // สร้าง parameter มารองรับข้อมูล
//   this.name = name
//   this.color = color
//   this.weight = weight
// }
// const dog1 = new Doggie('Alabu', 'Black', '10') // new ใช้รับ object ใหม่ที่ถูกสร้างขึ้น
// const dog2 = new Doggie('Alabu', 'Blue', '15')
// console.log(dog1)
// console.log(dog2)

export default {
  components: { headerbar },
  password: '',
  telnumb: '',
  data() {
    return {
      show2: false,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
}
.zone-left {
  width: 50%;
  padding: 80px 79px 80px 88px;
}
.zone-right {
  position: relative;
  width: 50%;
  background: #161616;
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
  color: #f55085;
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
  font-size: 12px !important;
  letter-spacing: 0;
  padding: 10px 16px !important;
  border-radius: 6px;
}
</style>