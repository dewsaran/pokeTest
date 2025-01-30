<template>
  <div>
    <div class="bg">
      <div class="imglg">
        <v-img src="/pklg.svg.png"></v-img>
      </div>
    </div>
    <div class="content-container">
      <div>
        <v-text-field
          v-model="search"
          class="search"
          append-icon="mdi-magnify"
          label="Search Name"
          single-line
          hide-details
          solo
        ></v-text-field>
      </div>
      <div class="content-mid">
        <v-btn-toggle class="content-mid" color="red" mandatory tile>
          <v-btn
            class="btn"
            value="btn1"
            :class="{ active: activebtn === 'btn1' }"
            @click="activebtn = 'btn1'"
            >Pokemon FireRed/LeafGreen {{ user?.first_name }}</v-btn
          >
          <v-btn
            class="btn"
            value="btn2"
            :class="{ active: activebtn === 'btn2' }"
            @click="activebtn = 'btn2'"
            >Pokemon Gold/Silver</v-btn
          >
          <v-btn
            class="btn"
            value="btn3"
            :class="{ active: activebtn === 'btn3' }"
            @click="activebtn = 'btn3'"
            >Pokemon Ruby/Sapphire</v-btn
          >
          <v-btn
            class="btn"
            value="btn4"
            :class="{ active: activebtn === 'btn4' }"
            @click="activebtn = 'btn4'"
            >Pokemon Diamond/Pearl</v-btn
          >

          <!-- <v-btn
          value="btn2"
          :class="{ active: activebtn === 'btn2' }"
          @click="activebtn = 'btn2'"
          >Desserts</v-btn
        > -->
        </v-btn-toggle>
      </div>

      <div v-if="tb1" v-show="activebtn === 'btn1'">
        <v-dialog v-model="dialog1" max-width="550px">
          <v-card>
            <v-card-title>
              <span class="text-h5"
                >{{ pokemonName }}#{{ pokemondetail.id }}</span
              >
            </v-card-title>

            <v-card-text>
              <v-container class="data">
                <v-img
                  width="200"
                  :src="imageUrl + pokemondetail.id + '.png'"
                  position="center"
                ></v-img>

                <div class="property">
                  <h3 class="left">Base Experience</h3>
                  <div class="right">
                    {{ pokemondetail.base_experience }} XP
                  </div>
                </div>

                <div class="property">
                  <h3 class="left">Height</h3>
                  <div class="right">{{ pokemondetail.height / 10 }} m</div>
                </div>
                <div class="property">
                  <h3 class="left">Weight</h3>
                  <div class="right">{{ pokemondetail.weight / 10 }} kg</div>
                </div>
                <div class="property">
                  <h3 class="left">Type</h3>
                  <div class="types">
                    <div
                      v-for="(value, index) in pokemondetail.types"
                      :key="'value' + index"
                      class="type"
                    >
                      <span :class="value.type.name">
                        {{ value.type.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Abilities</h3>
                  <div class="abilities">
                    <div
                      v-for="(value, index) in pokemondetail.abilities"
                      :key="'value' + index"
                      class="ability"
                    >
                      {{ value.ability.name }}
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Stats</h3>
                  <div class="box">
                    <div
                      v-for="(value, index) in pokemondetail.stats"
                      :key="'value' + index"
                    >
                      <div>
                        <h4>
                          {{ value.stat.name }}
                        </h4>
                        <h4>{{ value.base_stat }}</h4>
                      </div>
                      <div class="bar">
                        <div
                          class="progress"
                          :style="{
                            width: value.base_stat + '%',
                          }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog1 = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div class="card-list">
          <div class="card-grid">
            <v-card
              v-for="(pokemon, i) in filteredList"
              :key="i"
              max-width="374"
            >
              <v-img
                :src="imageUrl + pokemon.entry_number + '.png'"
                position="center"
                class="card-img"
                @click="callpokedetail(pokemon)"
              ></v-img>
              <v-card-text class="f-title">
                #{{ pokemon.entry_number }} {{ pokemon.pokemon_species.name }}
              </v-card-text>
            </v-card>
          </div>
        </div>
        <!-- <v-simple-table>
        <template #default>
          <thead class="table1">
            <tr>
              <th style="color: white; font-size: 18px; width: 1%">ID</th>
              <th style="color: white; font-size: 18px">PokeMon Name</th>
              <th style="color: white; font-size: 18px; width: 4%">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pokemon, i) in filteredList" :key="i">
              <td style="font-size: 14px; width: 1%">
                {{ pokemon.entry_number }}
              </td>
              <td style="font-size: 14px">
                {{ pokemon.pokemon_species.name }}
                <v-avatar size="x-large">
                  <v-img
                    :src="imageUrl + pokemon.entry_number + '.png'"
                    position="center"
                  ></v-img>
                </v-avatar>
              </td>
              <td>
                <v-btn
                  class="btnon"
                  rounded
                  color="rgb(200, 200, 200)"
                  @click="callpokedetail(pokemon)"
                  >Detail</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table> -->
      </div>

      <div v-if="tb2" v-show="activebtn === 'btn2'" class="table2">
        <v-dialog v-model="dialog2" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container class="data">
                <v-avatar size="x-large">
                  <v-img
                    :src="imageUrl + pokemondetail.id + '.png'"
                    position="center"
                  ></v-img>
                </v-avatar>
                <div class="property">
                  <h3 class="left">Base Experience</h3>
                  <div class="right">
                    {{ pokemondetail.base_experience }} XP
                  </div>
                </div>

                <div class="property">
                  <h3 class="left">Height</h3>
                  <div class="right">{{ pokemondetail.height / 10 }} m</div>
                </div>
                <div class="property">
                  <h3 class="left">Weight</h3>
                  <div class="right">{{ pokemondetail.weight / 10 }} kg</div>
                </div>
                <div class="property">
                  <h3 class="left">Type</h3>
                  <div class="types">
                    <div
                      v-for="(value, index) in pokemondetail.types"
                      :key="'value' + index"
                      class="type"
                    >
                      <span :class="value.type.name">
                        {{ value.type.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Abilities</h3>
                  <div class="abilities">
                    <div
                      v-for="(value, index) in pokemondetail.abilities"
                      :key="'value' + index"
                      class="ability"
                    >
                      {{ value.ability.name }}
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Stats</h3>
                  <div class="box">
                    <div
                      v-for="(value, index) in pokemondetail.stats"
                      :key="'value' + index"
                    >
                      <div>
                        <h4>
                          {{ value.stat.name }}
                        </h4>
                        <h4>{{ value.base_stat }}/100</h4>
                      </div>
                      <div class="bar">
                        <div
                          class="progress"
                          :style="{
                            width: value.base_stat + '%',
                          }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div class="card-list">
          <div class="card-grid">
            <v-card
              v-for="(pokemon, i) in filteredList1"
              :key="i"
              max-width="374"
            >
              <v-img
                :src="imageUrl + pokemon.entry_number + '.png'"
                position="center"
                class="card-img"
                @click="callpokedetail(pokemon)"
              ></v-img>
              <v-card-text class="f-title">
                #{{ pokemon.entry_number }} {{ pokemon.pokemon_species.name }}
              </v-card-text>
            </v-card>
          </div>
        </div>
        <!-- <v-simple-table>
          <template #default>
            <thead class="table2">
              <tr>
                <th style="color: white; font-size: 18px; width: 1%">ID</th>
                <th style="color: white; font-size: 18px">PokeMon Name</th>
                <th style="color: white; font-size: 18px; width: 4%">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pokemon, i) in filteredList1" :key="i">
                <td style="font-size: 14px; width: 1%">
                  {{ pokemon.entry_number }}
                </td>
                <td style="font-size: 14px">
                  {{ pokemon.pokemon_species.name }}
                  <v-avatar size="x-large">
                    <v-img
                      :src="imageUrl + pokemon.entry_number + '.png'"
                      position="center"
                    ></v-img>
                  </v-avatar>
                </td>
                <td>
                  <v-btn
                    class="btnon"
                    rounded
                    color="rgb(200, 200, 200)"
                    @click="callpokedetail(pokemon)"
                    >Detail</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->
      </div>

      <div v-if="tb3" v-show="activebtn === 'btn3'" class="table3">
        <v-dialog v-model="dialog3" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container class="data">
                <v-avatar size="x-large">
                  <v-img
                    :src="imageUrl + pokemondetail.id + '.png'"
                    position="center"
                  ></v-img>
                </v-avatar>
                <div class="property">
                  <h3 class="left">Base Experience</h3>
                  <div class="right">
                    {{ pokemondetail.base_experience }} XP
                  </div>
                </div>

                <div class="property">
                  <h3 class="left">Height</h3>
                  <div class="right">{{ pokemondetail.height / 10 }} m</div>
                </div>
                <div class="property">
                  <h3 class="left">Weight</h3>
                  <div class="right">{{ pokemondetail.weight / 10 }} kg</div>
                </div>
                <div class="property">
                  <h3 class="left">Type</h3>
                  <div class="types">
                    <div
                      v-for="(value, index) in pokemondetail.types"
                      :key="'value' + index"
                      class="type"
                    >
                      <span :class="value.type.name">
                        {{ value.type.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Abilities</h3>
                  <div class="abilities">
                    <div
                      v-for="(value, index) in pokemondetail.abilities"
                      :key="'value' + index"
                      class="ability"
                    >
                      {{ value.ability.name }}
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Stats</h3>
                  <div class="box">
                    <div
                      v-for="(value, index) in pokemondetail.stats"
                      :key="'value' + index"
                    >
                      <div>
                        <h4>
                          {{ value.stat.name }}
                        </h4>
                        <h4>{{ value.base_stat }}/100</h4>
                      </div>
                      <div class="bar">
                        <div
                          class="progress"
                          :style="{
                            width: value.base_stat + '%',
                          }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog3 = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-simple-table>
          <template #default>
            <thead class="table3">
              <tr>
                <th style="color: white; font-size: 18px; width: 1%">ID</th>
                <th style="color: white; font-size: 18px">PokeMon Name</th>
                <th style="color: white; font-size: 18px; width: 4%">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pokemon, i) in filteredList2" :key="i">
                <td tyle="font-size: 14px;  width: 1%">
                  {{ pokemon.entry_number }}
                </td>
                <td>
                  {{ pokemon.pokemon_species.name }}
                  <v-avatar size="x-large">
                    <v-img
                      :src="imageUrl + pokemon.entry_number + '.png'"
                      position="center"
                    ></v-img>
                  </v-avatar>
                </td>
                <td>
                  <v-btn
                    class="btnon"
                    rounded
                    color="rgb(200, 200, 200)"
                    @click="callpokedetail(pokemon)"
                    >Detail</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div v-if="tb4" v-show="activebtn === 'btn4'" class="table3">
        <v-dialog v-model="dialog4" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container class="data">
                <v-avatar size="x-large">
                  <v-img
                    :src="imageUrl + pokemondetail.id + '.png'"
                    position="center"
                  ></v-img>
                </v-avatar>
                <div class="property">
                  <h3 class="left">Base Experience</h3>
                  <div class="right">
                    {{ pokemondetail.base_experience }} XP
                  </div>
                </div>

                <div class="property">
                  <h3 class="left">Height</h3>
                  <div class="right">{{ pokemondetail.height / 10 }} m</div>
                </div>
                <div class="property">
                  <h3 class="left">Weight</h3>
                  <div class="right">{{ pokemondetail.weight / 10 }} kg</div>
                </div>
                <div class="property">
                  <h3 class="left">Type</h3>
                  <div class="types">
                    <div
                      v-for="(value, index) in pokemondetail.types"
                      :key="'value' + index"
                      class="type"
                    >
                      <span :class="value.type.name">
                        {{ value.type.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Abilities</h3>
                  <div class="abilities">
                    <div
                      v-for="(value, index) in pokemondetail.abilities"
                      :key="'value' + index"
                      class="ability"
                    >
                      {{ value.ability.name }}
                    </div>
                  </div>
                </div>
                <div class="property">
                  <h3 class="left">Stats</h3>
                  <div class="box">
                    <div
                      v-for="(value, index) in pokemondetail.stats"
                      :key="'value' + index"
                    >
                      <div>
                        <h4>
                          {{ value.stat.name }}
                        </h4>
                        <h4>{{ value.base_stat }}/100</h4>
                      </div>
                      <div class="bar">
                        <div
                          class="progress"
                          :style="{
                            width: value.base_stat + '%',
                          }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog4 = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-simple-table>
          <template #default>
            <thead class="table4">
              <tr>
                <th style="color: white; font-size: 18px; width: 1%">ID</th>
                <th style="color: white; font-size: 18px">PokeMon Name</th>
                <th style="color: white; font-size: 18px; width: 4%">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pokemon, i) in filteredList3" :key="i">
                <td tyle="font-size: 14px;  width: 1%">
                  {{ pokemon.entry_number }}
                </td>
                <td>
                  {{ pokemon.pokemon_species.name }}
                  <v-avatar size="x-large">
                    <v-img
                      :src="imageUrl + pokemon.entry_number + '.png'"
                      position="center"
                    ></v-img>
                  </v-avatar>
                </td>
                <td>
                  <v-btn
                    class="btnon"
                    rounded
                    color="rgb(200, 200, 200)"
                    @click="callpokedetail(pokemon)"
                    >Detail</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <!-- <div v-if="tb2" v-show="activebtn === 'btn2'" class="zone-enter">
      <div><h1>Dessert Tables</h1></div>
      <v-dialog v-model="dialog2" max-width="500px">
        <template #activator="{ on, attrs }">
          <v-btn
            class="mb-2"
            v-bind="attrs"
            color="blue darken-1"
            outlined
            v-on="on"
          >
            New Items
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.name"
                    label="Dessert name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.calories"
                    label="Calories"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.fat"
                    label="Fat (g)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.carbs"
                    label="Carbs (g)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.protein"
                    label="Protein (g)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left" style="font-size: 18px">Name</th>
              <th class="text-left" style="font-size: 18px">Calories</th>
              <th class="text-left" style="font-size: 18px">Fat</th>
              <th class="text-left" style="font-size: 18px">Carbs</th>
              <th class="text-left" style="font-size: 18px">Protein</th>
              <th class="text-left" style="font-size: 18px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.fat }}</td>
              <td>{{ item.carbs }}</td>
              <td>{{ item.protein }}</td>
              <td>
                <v-btn
                  class="btnon"
                  rounded
                  color="cyan"
                  @click="editItem(item)"
                  >Edit</v-btn
                >
                <v-btn
                  class="btnon"
                  rounded
                  color="red"
                  @click="deleteItemConfirm(item)"
                  >Delete</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div> -->
    </div>
  </div>
</template>

<script>
// import { useTelegram } from 'vue-tg';
export default {
  data: () => ({
    user: null,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialogDelete: false,
    activebtn: 'btn1',
    tb1: true,
    tb2: true,
    tb3: true,
    tb4: true,
    pokemons: [],
    pokemon1: [],
    pokemon2: [],
    pokemon3: [],
    pokemondetail: [],
    pkmon: {},
    pokemonName: '',
    pokemonUrl: '',
    pokemontype: [],
    pokemontest: [],
    pokemonAbility: [],
    search: '',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedPokemon: {
      name: '',
    },
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    filteredList() {
      return this.pokemons.filter((post) => {
        return post.pokemon_species.name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
    filteredList1() {
      return this.pokemon1.filter((post) => {
        return post.pokemon_species.name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
    filteredList2() {
      return this.pokemon2.filter((post) => {
        return post.pokemon_species.name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
    filteredList3() {
      return this.pokemon3.filter((post) => {
        return post.pokemon_species.name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },
  mounted() {
    this.callpoke()
    this.callpoke1()
    this.callpoke2()
    this.callpoke3()
    if (typeof window !== 'undefined' && this.$telegram?.WebApp) {
      const WebApp = this.$telegram.WebApp;
      this.user = WebApp.initDataUnsafe?.user || {}; // ดึงข้อมูลผู้ใช้
      WebApp.expand(); // ขยาย Web App ให้เต็มจอ
    }
  },

  methods: {
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
          console.log('response.pokemon_entries', response.pokemon_entries)
          response.pokemon_entries.forEach((pokemon) => {
            console.log('pokemon.url', pokemon.pokemon_species.url)
            pokemon.entry_number = pokemon.pokemon_species.url
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
    async callpoke1() {
      try {
        const payload = {
          namePoke: '',
        }
        const response = await this.$store.dispatch(
          'callApi/requestPokemonName1',
          payload
        )
        if (response) {
          console.log('response.pokemon_entries', response.pokemon_entries)
          response.pokemon_entries.forEach((pokemon) => {
            console.log('pokemon.url', pokemon.pokemon_species.url)
            pokemon.entry_number = pokemon.pokemon_species.url
              .split('/')
              .filter(function (part) {
                return !!part
              })
              .pop()
            this.pokemon1.push(pokemon)
            console.log('this.pokemon1', this.pokemon1)
          })
        }
      } catch (error) {}
    },
    async callpoke2() {
      try {
        const payload = {
          namePoke: '',
        }
        const response = await this.$store.dispatch(
          'callApi/requestPokemonName2',
          payload
        )
        if (response) {
          console.log('response.pokemon_entries', response.pokemon_entries)
          response.pokemon_entries.forEach((pokemon) => {
            console.log('pokemon.url', pokemon.pokemon_species.url)
            pokemon.entry_number = pokemon.pokemon_species.url
              .split('/')
              .filter(function (part) {
                return !!part
              })
              .pop()
            this.pokemon2.push(pokemon)
            console.log('this.pokemon2', this.pokemon2)
          })
        }
      } catch (error) {}
    },
    async callpoke3() {
      try {
        const payload = {
          namePoke: '',
        }
        const response = await this.$store.dispatch(
          'callApi/requestPokemonName3',
          payload
        )
        if (response) {
          console.log('response.pokemon_entries', response.pokemon_entries)
          response.pokemon_entries.forEach((pokemon) => {
            console.log('pokemon.url', pokemon.pokemon_species.url)
            pokemon.entry_number = pokemon.pokemon_species.url
              .split('/')
              .filter(function (part) {
                return !!part
              })
              .pop()
            this.pokemon3.push(pokemon)
            console.log('this.pokemon3', this.pokemon3)
          })
        }
      } catch (error) {}
    },
    async callpokedetail(data) {
      this.splitTest = data.pokemon_species.url.split(
        'https://pokeapi.co/api/v2/pokemon-species/'
      )
      const payload = {
        pkdetail: this.splitTest,
      }
      console.log('this.splitTest1111', this.splitTest[1])
      console.log('data', data)
      const testSplit2 = this.splitTest.shift()
      console.log(testSplit2)
      console.log('this.splitTest2222', this.splitTest)
      try {
        const response = await this.$store.dispatch(
          'callApi/requestPokemonDetail',
          payload
        )
        if (response) {
          this.dialog1 = true
          this.pokemondetail = response
          console.log('this.pokemondetail', this.pokemondetail)
          this.pokemonName = response.name
          // this.pokemonAbility = response.abilities
          // this.pokemonAbility = response.abilities
          // this.pokemontype = response.types
          // console.log('pkmability', this.pokemontype)
          // response.types.forEach((pkmtype) => {
          //   console.log('pkmtype', pkmtype.type.name)
          //   this.pokemontest = pkmtype.type.name
          //   console.log('this.pokemontest', this.pokemontest)
          // })
          // console.log('response.habitat.name', response)
          // this.pokehabi = response.habitat.name
          // console.log('this.splitTest', this.splitTest)
        }
      } catch (error) {}
    },
    initialize() {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ]
    },
    setPokemonUrl(url) {
      this.pokemonUrl = url
    },

    // choosePokemon(pkmon) {
    //   this.pkmon = pkmon
    //   this.pokemonName = pkmon.color.name
    //   this.pokemonUrl = pkmon.pokemon_species.url
    //   console.log('pokemonName', this.pokemonUrl)
    //   console.log('this.pkmon.name', this.pkmon)
    //   this.dialog1 = true
    // },
    // editPokemon(pokemon) {
    //   this.editedIndex = this.pokemons.indexOf(pokemon)
    //   this.editedPokemon = pokemon
    //   this.dialog = true
    // },

    // editItem(item) {
    //   this.editedIndex = this.desserts.indexOf(item)
    //   this.editedItem = item
    //   this.dialog2 = true
    // },

    // deleteItemConfirm(item) {
    //   this.editedIndex = this.desserts.indexOf(item)
    //   this.editedItem = item
    //   this.desserts.splice(this.editedIndex, 1)
    //   this.closeDelete()
    // },

    // close() {
    //   this.dialog = false
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem)
    //     this.editedIndex = -1
    //   })
    // },

    // closeDelete() {
    //   this.dialogDelete = false
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem)
    //     this.editedIndex = -1
    //   })
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.desserts[this.editedIndex], this.editedItem)
    //   } else {
    //     this.desserts.push(this.editedItem)
    //   }
    //   this.close()
    // },
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  padding: 0px 60px 60px 60px;
  // display: grid;
  background-image: url('../static/body_bg.png');
  background-size: auto;
  background-repeat: repeat;
}
.content-mid {
  flex-direction: row;
  display: flex;
  justify-content: center;
  width: auto;
  background-image: url('../static/body_bg.png');
  background-repeat: repeat;
}
.bg {
  background-image: url('../static/bgpokemon.jpg');
  background-size: 1660px, auto;
  padding-bottom: 10px;
  height: auto;
  text-align: -webkit-center;
  background-position: center;
}
.imglg {
  justify-self: center;
  display: grid;
  max-width: 500px;
  max-height: 300px;
  padding: 2%;
}
thead th {
  color: white;
  background: rgb(96, 96, 96);
  background-image: url('../static/container_bg.png');
  background-repeat: repeat;
}

th {
  border: 1px solid;
  border-color: rgb(255, 255, 255);
  text-align: center;
}
tr:nth-child(even) {
  background-color: rgb(229, 229, 229);
}
tr:nth-child(odd) {
  background-color: rgb(219, 219, 219);
}
td {
  border: 1px solid;
  border-color: rgb(255, 255, 255);
}
.btn {
  background-image: url('../static/body_bg.png');
  background-repeat: repeat;
  color: #000000;
}
.type {
  .grass {
    background: rgb(3, 139, 44) !important;
  }
  .poison {
    background: rgb(74, 7, 105) !important;
  }
  .water {
    background: rgb(8, 135, 219) !important;
  }
  .dragon {
    background: rgb(27, 2, 68) !important;
  }
  .ice {
    background: rgb(78, 199, 255) !important;
  }
  .flying {
    background: rgb(145, 215, 255) !important;
  }
  .fire {
    background: rgb(238, 135, 17) !important;
  }
  .ghost {
    background: rgb(74, 52, 87) !important;
  }
  .fighting {
    background: rgb(122, 0, 0) !important;
  }
  .normal {
    background: rgb(104, 104, 104) !important;
  }
  .psychic {
    background: rgb(195, 0, 255) !important;
  }
  .bug {
    background: rgb(52, 87, 6) !important;
  }
  .dark {
    background: rgb(43, 43, 43) !important;
  }
  .steel {
    background: rgb(116, 116, 116) !important;
  }
  .fairy {
    background: rgb(248, 165, 237) !important;
  }
  .eletric {
    background: rgb(255, 217, 1) !important;
  }
  .rock {
    background: rgb(88, 95, 100) !important;
  }
  .ground {
    background: rgb(92, 70, 70) !important;
  }
}
.types,
.abilities {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
}
.type {
  // color: rgb(17, 67, 182);
  margin: 0 0 10px 0;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;
  span {
    color: #ffffff !important;
    padding: 10px 14px;
    border-radius: 10px;
  }
}
.ability {
  color: rgb(105, 105, 105);
  margin: 0 10px 10px 0;
  border-radius: 10px;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;
  word-wrap: none;
  word-break: keep-all;
  background-color: #ffffff;
  border: 3px solid;
}
h3 {
  color: black;
  padding-bottom: 10px;
  width: 90%;
  max-width: 300px;
}
.data {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
}
.property {
  color: black;
  width: 100%;
  max-width: 400px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.box {
  width: 400px;
  margin: 45px auto;
  text-transform: capitalize;

  // padding: 20px;
  // background: #ccc;
  // box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.1);
}
.bar {
  width: 100%;
  background: #f2f2f2;
  overflow: hidden;
  padding: 5px;
}
.progress {
  float: left;
  padding: 15px;
  margin-right: 10px;
  background: rgba(98, 203, 50, 1);
}
.percent {
  float: right;
  font-weight: 600;
  height: 15px;
  line-height: 30px;
}
.search {
  color: rgb(79, 79, 79);
  margin: auto;
  border-radius: 20px;
  background-color: #ffffff;
  border: 3px solid;
  width: 600px;
}

.card-list {
  padding: 40px;
  background-image: url('../static/container_bg.png');
  background-color: white;
  background-repeat: repeat;
}
.card-grid {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  width: 75%;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  background: white;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}
.card-img {
  background-color: rgb(225 225 225);
}
.card-img:hover {
  opacity: 1;
  background-image: url('../static/bgpokemon.jpg');
  background-size: 400px, auto;
  background-position: center;
  cursor: context-menu;
}
.f-title {
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
}

@media only screen and (max-width: 900px) {
  .bg {
    background-position: center;
    width: 414px;
    background-size: auto;
    height: auto;
  }
  .content-container {
    padding: 0%;
    width: 100%;
  }
  .content-mid {
    flex-direction: column;
  }
  thead {
    width: 100px;
  }
  .imglg {
    max-width: auto;
    // justify-self: center;
  }
  .search {
    width: 300px;
  }
  .card-grid {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background: white;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  .card-img:hover {
    background-size: 200px, auto;
  }
  .f-title {
    font-size: 12px;
    font-weight: 600;
    padding: 0px 0px 0px 10px;
  }
  .bar {
    width: 75%;
  }
}
</style>
