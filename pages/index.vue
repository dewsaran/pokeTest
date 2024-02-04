<template>
  <div>
    <headerbar />
    <div class="main-wrap">
      <div class="container">
        <div>
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item
          ></v-carousel>
        </div>
        <div class="content-container">
          <div>
            <div>
              <div>
                <div class="text-center"></div>
              </div>
            </div>
          </div>
          <div>
            <h1>Pokemon List</h1>
          </div>
          <div class="card-list">
            <div class="card-grid">
              <v-card
                v-for="(pokemon, i) in pokemons"
                :key="'poke' + i"
                max-width="374"
              >
                <v-img
                  :src="imageUrl + pokemon.id + '.png'"
                  position="center"
                ></v-img>
                <v-card-title>
                  #{{ pokemon.id }} {{ pokemon.name }}
                </v-card-title>
                <div
                  class="overlay"
                  style="text-align: center; padding-top: 15%"
                >
                  <v-btn
                    plain
                    color="white"
                    style="font-size: 20px"
                    @click="callpokedetail()"
                    >Show Detail</v-btn
                  >
                </div>
                <div>
                  <v-card-text>
                    <v-row><div style="padding-left: 12px"></div> </v-row>
                    <v-row
                      ><div
                        style="padding-left: 12px; padding-bottom: 12px"
                      ></div
                    ></v-row>
                  </v-card-text>
                </div>
              </v-card>
            </div>
          </div>

          <v-btn @click="callpoke">test api</v-btn>
          <h4>{{ pokemons || 'kuy dew' }}</h4>
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
      pokemons: [],
      pokemon: {},
      search: '',
      dialog: false,
      imageUrl:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
      ],
    }
  },
  methods: {
    // call api ไม่ส่ง payload

    async callpoke() {
      try {
        const payload = {
          namePoke: '',
        }
        const response = await this.$store.dispatch(
          'callApi/requestPokemonName',
          payload
        )
        if (response) {
          console.log('response.results', response.results)
          // this.pokemons = response.results
          response.results.forEach((pokemon) => {
            console.log('pokemon.url', pokemon.url)
            pokemon.id = pokemon.url
              .split('/')
              .filter(function (part) {
                return !!part
              })
              .pop()
            this.pokemons.push(pokemon)
            console.log('this.pokemons', this.pokemons)
          })
        }
      } catch (error) {}
    },
    async callpokedetail(data) {
      this.splitTest = data.split('https://pokeapi.co/api/v2')
      const testSplit2 = this.splitTest.shift()
      console.log(testSplit2)
      console.log('this.splitTest', this.splitTest)
      try {
        const response = await this.$store.dispatch(
          'callApi/requestPokemonDetail'
          // this.splitTest
        )
        if (response) {
          this.pokemon = response
          console.log('this.pokemon', this.pokemon)
          console.log('response.habitat.name', response.habitat.name)
          this.pokehabi = response.habitat.name
          console.log('this.splitTest', this.splitTest)
        }
      } catch (error) {}
    },
  },
}
// methods: {
//   searchfuction(x) {
//     console.log(this.search)
//     console.log('x', x)
//   },
// },
</script>

<style>
.main-wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
}
.content-container {
  padding: 60px;
}
.card-list {
  padding-top: 40px;
  padding-bottom: 40px;
}
.card-grid {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  width: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}
.th {
  border: solid black 5px;
  padding: 5px;
}
.overlay {
  justify-content: center;
  position: absolute;
  bottom: 0;
  background: #f55085;
  width: 100%;
  opacity: 0;
  color: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
:hover.overlay {
  opacity: 1.5;
}
:hover.rating {
  opacity: 0;
}
</style>