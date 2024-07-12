<template>
  <div class="header__container">
    <img src="../assets/logo.png" />

    <NavComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "HeaderComponent",
  components: { NavComponent },
};
</script>

<style scoped>
.header__container {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  /* margin-top: 10px; */
  height: 15vh;
  width: 100vw;
  background-color: #eeb0bd;
}

.header__container img {
  height: 100%;
}
</style>
