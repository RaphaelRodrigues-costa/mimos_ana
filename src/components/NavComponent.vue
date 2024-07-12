<template>
  <div class="nav__container">
    <nav>
      <router-link to="/home">Home</router-link>
      <!-- <router-link to="/loguin">login</router-link> | -->
      <!-- <router-link to="/product">product</router-link> | -->
      <router-link to="/profiel">Perfil</router-link>
      <router-link to="/shopping-cart">Carrinho</router-link>
      <!-- <router-link to="/registre">registre</router-link> | -->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style scoped>
.nav__container {
  display: flex;
  align-items: center;
}
.nav__container nav {
  display: flex;
  gap: 16px;
}

.nav__container nav a {
  color: #f7d8df;
  text-decoration: none;
  font-size: 18px;
}
</style>
