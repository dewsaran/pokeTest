<template>

  <div class="container">
    <img
      alt="Vue logo"
      src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
    >
    <h1>Pokedex</h1>
    
    <pokemonlist :image-url="imageUrl" :api-url="apiUrl" @setPokemonUrl="setPokemonUrl"/>
    <pokemondetail
      v-if="showDetail"
      :pokemon-url="pokemonUrl"
      :image-url="imageUrl"
      @closeDetail="closeDetail"
    />
  </div>
</template> 
<script>
import pokemonlist from "../components/PokemonList.vue";
import pokemondetail from "../components/PokemonDetail.vue";

export default {
  components: {
    pokemonlist,
    pokemondetail
  },
  data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false
    };
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  //background: radial-gradient(#ffbf0b, #e20000);

  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
}

h1 {
  color: #efefef;
}
</style>