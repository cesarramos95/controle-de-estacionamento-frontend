<template>
<div>
  <navBar/>
  <div class ="register">
    <form>
      <label for="name">Nome:</label>
      <input v-model="name" type="text" name="name" value />

      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">Password:</label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Register</button>

      <router-link to="/login">
        Já possui uma conta? Faça login.
      </router-link>
    </form>
  </div>

  </div>
</template>

<script>
import navBar from "@/components/AppNav.vue";
export default {
  components:{
    navBar
  },
  data() {
    return {
      name:"",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        });
    }
  }
};
</script>    

<style scoped>
.register{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>