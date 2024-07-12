<template>
  <div class="login__component">
    <img src="../assets/logo.png" alt="logo da marca" />
    <form @submit.prevent="login" class="form__login">
      <h3 class="titel__login">Sejam bem-vindos ao mimos da ana</h3>
      <input
        v-model="email"
        type="text"
        id="email"
        
        placeholder="Email"
        :class="{ 'input-error': !validateEmail() && email.length > 0 }"
      />
      <p v-if="!validateEmail() && email.length > 0" class="error-message">
        Por favor, insira um e-mail válido.
      </p>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Senha"
      />
      <div class="button__login">
        <button @click="login">Vamos lá</button>
        <button @click="register">Registrar</button>
      </div>
    </form>
  </div>
</template>
 
 <script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      data: {},
      isValidLogin: false,
    };
  },
  methods: {
    async login() {
      try {
        this.$router.push("/home");
        // const response = await this.$axios.get('http://localhost:3000/users');
        if(this.email === "rpctes@outlook.com" && this.password === "12qwaszx") {
          this.$router.push("/home")
        }

        // console.log(response.data); 
      } catch (error) {
        console.error('Ruim', error)
      }

    },
    register() {
      this.$router.push("/registre");
    },
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(this.email);
    },
  },
};
</script>
   
<style scoped>
.login__component[data-v-5c6101e4] {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background: #eeb0bd;
}

.login__component[data-v-5c6101e4] img {
  height: 100%;
  padding: 20px;
}

.titel__login {
  color: #f7d8df;
  cursor: default;
}

.form__login {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 30%;
  margin: 10px;
  gap: 15px;
}

.form__login input {
  padding: 8px;
  border: solid 2px #eaa6b5;
  border-radius: 5px;
  background: #f7d8df;
  outline: none;
}

.form__login button {
  padding: 8px;
  border: solid 2px #eaa6b5;
  border-radius: 5px;
}

.button__login button {
  padding: 8px;
  border: none; /* Remova a borda */
  background-color: #eeb0bd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #f7d8df;
}

.button__login button:hover,
.button__login button:focus {
  background-color: #f398ac;
  /* Adicione um estilo de foco adequado */
}


.input-error {
  border: 2px solid red !important;
}

.error-message {
  color: red !important;
  margin-top: -5px !important;
}
</style>
   