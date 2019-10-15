<template>
  <div>
  <navBar/>

  <div class = "dashboard">
    
    <template v-if="!isLoading">
      <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
      <Vaga v-for="(index,key) in a" :key="key" :index="index" />
      <BotaoCRUD />
    
    </template>
    <p v-else>Loading events</p>
  </div>
  </div>
</template>
    
<script>
import axios from "axios";
import EventCard from "../components/EventCard";

// Componentes utilizados na home
import Vaga from "@/components/Vaga.vue";
import BotaoCRUD from "@/components/BotaoCRUD.vue";

import navBar from "@/components/AppNavVaga.vue";

export default {
  name: "dashboard",
  components: {
    EventCard,
    Vaga,
    BotaoCRUD,
    
    navBar
  },
  data() {
    return {
      a: [1, 2, 3, 4, 5]
    };
  },
  created() {
    axios.get("http://localhost:3000/dashboard").then(({ data }) => {
      this.events = data.events.events;
      this.isLoading = false;
    });
  }
};
</script>

<style scoped>
  
.dashboard {
  
  flex-direction: row;
  margin: auto;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
  margin-top:100px;
}
</style>