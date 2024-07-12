<template>
  <div class="register__component">
    <h1>Formulário de Contato</h1>
    <form @submit.prevent="submitForm" class="form__register">
      <!-- <label for="name">Nome:</label> -->
      <input type="text" id="name" v-model="formData.name" placeholder="Nome" required>

      <!-- <label for="phone">Telefone:</label> -->
      <input type="tel" id="phone" v-model="formData.phone" placeholder="Telefone" required>

      <!-- <label for="email">E-mail:</label> -->
      <input type="email" id="email" placeholder="E-mail" v-model="formData.email" required>

      <input type="password" id="password" placeholder="Senha" v-model="formData.password" required>

      <input type="password" id="password_confirmation" placeholder="Confirmar a Senha" v-model="formData.password_confirmation" required>

      <SearchAddress @addressOk="receberEndereco" />

      <button @click="submitForm" class="button__register">Enviar</button>
    </form>
  </div>
</template>

<script>
import SearchAddress from '@/components/SearchAddress.vue'
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
        address: {},
      },
    
    };
  },
  components: {
    SearchAddress,
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:8000/register', this.formData);
        console.log(response.status);
        // Verifique se o registro foi bem-sucedido
        if (response.status === 204) {
          console.log('Registro bem-sucedido!');
          this.$router.push("/home")
        } else {
          console.error('Falha no registro:', response.data.message);
        }
      } catch (error) {
        console.error('Erro durante o registro:', error);
      }
      console.log(this.formData, this.formData.address);
      // this.formSubmitted = true;
    },

    receberEndereco(address) {
      this.formData.address = address;
      console.log('Estou no pai', address);
    },
  },
};

</script>

<style scoped>
.register__component{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eeb0bd;
  gap: 20px;
}
.register__component h1 {
  color: #f7d8df;
}

.form__register {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 30%;
  margin: 10px;
  gap: 15px;
}

.form__register input {
  padding: 8px;
  border: solid 2px #eaa6b5;
  border-radius: 5px;
  background: #f7d8df;
  outline: none;
}

.button__register  { 
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #eeb0bd;
  transition: background-color 0.3s ease;
  color: #f7d8df;
}

.button__register:hover,
.button__register:focus {
  background-color: #f398ac;
  /* Adicione um estilo de foco adequado */
}
</style>
