<template>
  <div class="button">
    <div class="dropdown">
    <button
      class="btn btn-success dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >Alocar</button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">César</a>
      <a class="dropdown-item" href="#">Joaquim</a>
      <a class="dropdown-item" href="#">Gabriela</a>
    </div>
  </div>
    <input class="btn btn-danger" type="button" value="Desalocar"/>
    
  </div>
</template>

<script>
export default {};

</script>

<style scoped>
.button{
    display:flex;
    flex-direction: row;
    margin-top:53px;
    margin-left:10px;
    justify-content: space-around;
}
</style>