<template>
<div>
  <navBar/>
  <div class="container">
    <div class="row col-md-6 col-md-offset-2 custyle">
      <table class="table table-striped custab">
        <thead>
          <tr>
            <th>Placa do carro</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Modelo do veículo</th>
            <th class="text-center">Ação</th>
          </tr>
        </thead>
        <tr>
          <td>EXC5049</td>
          <td>César</td>
          <td>999718392</td>
          <td>Honda CG 125</td>
          <td class="text-center">
            <a class="btn btn-info btn-xs" href="#">
              <span class="glyphicon glyphicon-edit"></span> Editar
            </a>
            <a href="#" class="btn btn-danger btn-xs">
              <span class="glyphicon glyphicon-remove"></span> Deletar
            </a>
          </td>
        </tr>
        <tr>

          <td>ABC1029</td>
          <td>Joaquim</td>
          <td>999716482</td>
          <td>Hillux</td>
          <td class="text-center">
            <a class="btn btn-info btn-xs" href="#">
              <span class="glyphicon glyphicon-edit"></span> Editar
            </a>
            <a href="#" class="btn btn-danger btn-xs">
              <span class="glyphicon glyphicon-remove"></span> Deletar
            </a>
          </td>
        </tr>
        <tr>
          <td>JTI1928</td>
          <td>Gabriela</td>
          <td>999183749</td>
          <td>HB20</td>
          <td class="text-center">
            <a class="btn btn-info btn-xs" href="#">
              <span class="glyphicon glyphicon-edit"></span> Editar
            </a>
            <a href="#" class="btn btn-danger btn-xs">
              <span class="glyphicon glyphicon-remove"></span> Deletar
            </a>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <button class="btn btn-secondary btn-lg">Cadastrar cliente</button>
  </div>
</template>

<script>
import navBar from "@/components/AppNavVaga.vue";
export default {
  components:{
    navBar
  }
  
};
</script>

<style scoped>
.custab {
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5% 0;
  box-shadow: 3px 3px 2px #ccc;
  transition: 0.5s;
}
.custab:hover {
  box-shadow: 3px 3px 0px transparent;
  transition: 0.5s;
}
button{
  margin-left: 120px;
}
</style>