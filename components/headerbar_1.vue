<template>
  <div class="toolbar">
    <v-app-bar color="white">
      <div class="header-container">
        <a href="/" align="center">PokedexTest</a>
        <a href="/" class="btn-home">Home</a>
        <div class="spacer"></div>
        <v-btn href="/login" outlined style="color: white" class="btnlogin"
          >LOGIN</v-btn
        ><v-btn href="/signup" outlined color="#f55085 ">SIGN UP</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'headerbar',
    }
  },
}
</script>

<style scoped>
.spacer {
  flex-grow: 1 !important;
}
.btn-home {
  padding-left: 60px;
  padding-right: 60px;
}
.btnlogin {
  background-color: #f55085;
}
.toolbar {
  padding: 0%;
  margin: 0%;
  left: 0px;
  right: 0px;
}
.header-container {
  align-items: center;
  display: flex;
  position: static;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
}
a {
  color: #0000;
  text-decoration: none;
}
a:link {
  color: #f55085;
  text-transform: none;
  text-decoration: none;
}
a:hover {
  /* background-color: transparent; */
  color: #6d50f5;
}
</style>