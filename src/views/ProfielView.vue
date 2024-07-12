<template>
  <div class="profiel__container">
    <HeaderComponent />

    <div class="info__container">
      <img src="../assets/logo.png" alt="logo da marca" />
      <input v-model="name" id="name" value="name" placeholder="nome">
      <input v-model="email" id="email" value="email" placeholder="email">
      <input v-model="phone" id="phone" value="telefone" placeholder="telefone">
    </div>
  </div>
</template>
   
   <script>
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "ProfielView",
  data() {
    return {
      name: "Raphael Rodrigues",
      phone: 11992204417,
      email: "rpcfut@gmail.com"
    }
  },
  components: {
    HeaderComponent,
  },
};

</script>
   
<style scoped>
.info__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  padding: 5%;
  /* bsackground-color: aqua; */
  gap: 20px;
}

.info__container img {
  width: 250px;
  border-radius: 50%;
}

input {
  padding: 8px;
  border: solid 2px #eaa6b5;
  border-radius: 5px;
  background: #f7d8df;
  outline: none;
  width: 450px;
}
</style>
   