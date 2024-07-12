<template>
  <div class="filter__container">
    <SearchComponent/>
    <select name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <input type="checkbox" name="azul"  id="">
    <input type="checkbox" name="preto"  id="">
    <input type="checkbox" name="rosa"  id="">
    <input type="checkbox" name="roxo"  id="">
  </div>
</template>
   
   <script>
   import SearchComponent from '@/components/SearchComponent'
export default {
  name: "FilterComponent",
  components: {
    SearchComponent
  }
};
</script>
   
<style scoped>
.filter__container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 85vh;
  width: 17vw;
  background-color: white;
  padding: 20px 0;
 gap: 16px;
  /* box-shadow: 2px 0  #eaa6b5; */
  /* background-color: aquamarine; */
}

.filter__container h1 {
   color: red;
   /* width: auto;
   height: auto; */
  /* background-color: aquamarine; */

}
</style>
   