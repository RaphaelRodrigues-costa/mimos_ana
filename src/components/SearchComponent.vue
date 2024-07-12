<template>
    <div class="search">
      <input type="text" v-model="search" id="search" placeholder="Buscar...">
      <button @click="getProductByName">pesquisar</button>
    </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      search: "buscar"
    }
  },
  methods: {
    getProductByName() {
      console.log('clicou');
    }
  }
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: auto;
  border: solid 2px #eaa6b5;
  border-radius: 10px;
  /* background-color: red */
}

.search input {
  padding: 5px;
  height: 40px;
  width: 150px;
  border: none;

  border-radius: 10px 0px 0px 10px;
}
.search button {
  padding: 5px;
  height: 40px;
  border: none;
  border-radius: 0px 10px 10px 0px;
}
</style>
