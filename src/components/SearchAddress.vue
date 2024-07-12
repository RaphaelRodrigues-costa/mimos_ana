<template>
  <div class="search__address">
    <form>
      <!-- <label for="code">CEP: </label> -->
      <input
        type="text"
        id="code"
        v-model="address.code"
        @input="fidAddress"
        placeholder="CEP"
        required
      />
      <div v-if="exibir" class="search__address__montad">
        <!-- <label for="logradouro">logradouro: </label> -->
        <input type="text" id="logradouro" v-model="address.logradouro" readonly />

        <!-- <label for="number">numero</label> -->
        <input type="text" id="number" placeholder="Numero" v-model="address.numero" />

        <!-- <label for="bairro">bairro</label> -->
        <input type="text" id="bairro" v-model="address.bairro" readonly />

        <!-- <label for="state">estado</label> -->
        <input type="text" id="state" v-model="address.estado" readonly />

        <!-- <label for="compplemento">complemento</label> -->
        <input type="text" id="compplemento" placeholder="Complemento" v-model="address.complemento" />

        <!-- <label for="uf">uf</label> -->
        <input type="text" id="uf" v-model="address.uf" readonly />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchAddress",
  data() {
    return {
      address: {
        code: "",
        logradouro: "",
        numero: "",
        bairro: "",
        estado: "",
        complemento: "",
        uf: "",
      },
      exibir: false,
    };
  },
  methods: {
    async fidAddress() {
      const baseUrl = `http://viacep.com.br/ws/${this.address.code}/json/`;
      try {
        const response = await this.$axios.get(baseUrl);
        const data = response.data;
        // console.log(data, this.code, this.address.code);
        if (data.erro) {
          alert(`Cep não encontrado${this.address.code}`);
          return;
        }
        this.address.logradouro = data.logradouro;
        this.address.bairro = data.bairro;
        this.address.estado = data.localidade;
        this.address.uf = data.uf;

        this.exibir = true;

        this.$emit("addressOk", this.address);
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    "address.numero"(novoNumero, numeroAntigo) {
      this.address.numero = novoNumero;
      console.log("Número alterado:", novoNumero, numeroAntigo);
    },
    "address.complemento"(novoComplemento, complementoAntigo) {
      this.address.complemento = novoComplemento;
      console.log("Complemento alterado:", novoComplemento, complementoAntigo);
    },
    "address.code"(novoCode) {
      if (!novoCode) {
        this.exibir = false;
      }
      // this.address.code = novoComplemento
      //   console.log('Complemento alterado:', novoComplemento, complementoAntigo);
    },
  },
};
</script>

<style scoped>
input {
  padding: 8px;
  width: 100%;
  border: solid 2px #eaa6b5;
  border-radius: 5px;
  background: #f7d8df;
  outline: none;
}
.search__address__montad {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}
</style>