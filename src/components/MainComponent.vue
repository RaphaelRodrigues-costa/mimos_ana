<template>
  <div class="main__container">

    <CardComponent/>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'


export default {
  name: "MainComponent",
  components: {
    CardComponent,

  }
};
</script>

<style scoped>
.main__container {
  display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: flex-end; */
    width: 85vw;
    height: 85vh;
    background-color: white;
    overflow-y: auto;
    gap: 16px;
    padding: 20px;
}


</style>
