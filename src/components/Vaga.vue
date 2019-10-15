<template>
<div class="vaga">
 <h1  style="color:black;"> VAGA </h1>

 <br><h6>Nome: </h6><br>
 <h6>Placa: </h6>

  <Botao/> 
</div>
</template>

<script>
import Botao from "@/components/Botao.vue";
export default {
  name: "Vaga",
  data() {
    return {
      a: { b: "" }
    };
  },
  props: {
    mensagem: String,
    index: Number
  }, 
  components:{
    Botao
  }
}
</script>
<style scoped>
.vaga {
  align-items: center;
  width: 250px;
  height: 280px;
  border: 1px solid black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 22px;
}
</style>
