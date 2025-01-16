<template>
  <div v-for="item in indicadores"  :key="item" class="col-md-3 ">
    <div class="card text-center h-100">
      <div class="card-body" >
        <h5 class="card-title card-header " style="font-size:30px">{{item.titulo}}</h5>
        <p class=" display-4" :style=" item.estilo" >R${{item.valor_total ? item.valor_total : item.valor1}}</p>
        <p v-if="item.texto1">{{item.texto1}}<br> R$ {{item.valor1}}</p>
        <p v-html="item.icone"></p>
        <p v-if="item.texto2">{{item.texto2}}<br>R$ {{item.valor2}}</p>
      </div>
    </div>
  </div>

</template>


<script>
export default{
    name: 'Card',
    props:{
        indicadores:{
            Type: Object,
            required:true,
            
        }
    }
}
</script>

<style scoped>
.col-md-3{
  width:33%;
  
}
</style>