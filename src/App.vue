<template>
  <div class="bg-[#0f172a]">
  <NavBar class="bg-[#6CD55A]"/>
  <router-view/>
  <FooterBar class="bg-[#6CD55A]" />
  </div>
</template>
<script>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: { FooterBar, NavBar },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  padding-bottom: 70px;
  position: relative;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.logo {
  height: 250px;
  width: auto;
}

</style>
