<template>
<div>
  <navBar/>
  <div class ="login">
    
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password" value />

      <button type="submit" name="button">Login</button>

      <router-link to="/register">
        Não cadastrado? Registre-se.
      </router-link>
    </form>
  </div>
  </div>
</template>

<script>
import navBar from "@/components/AppNav.vue";
export default {
  components: {
    navBar,
    email:"",
    password:""
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({name: "dashboard"});
        });
    }
  }
};
</script>

<style scoped>
.login{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>