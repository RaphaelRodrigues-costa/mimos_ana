<template>
  <div class="home__container">
    <!-- <h1>home</h1> -->
    <HeaderComponent/>
  
    <div class="container__center">
      <FilterComponent/>
      <MainComponent/>
    </div>

    <!-- <HeaderComponent /> -->
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FilterComponent from "../components/FilterComponent";
import MainComponent from "../components/MainComponent";


export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FilterComponent,
    MainComponent,
  }
}
</script>

<style scoped>
.home__container{
  width: auto;
  height: 100vh;
  background-color: aquamarine;
}
.container__center{
  display: flex;
  height: auto;
}

</style>
