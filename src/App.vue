
<template>
  <router-view></router-view>
  

 

</template>


<script>
import lodash from 'lodash';


export default {

  data() {
    return{
   
   

    }
 
   
  },
  methods:{
    search:_.debounce(()=> {
     console.log('Ok,ok')
    },1000)
  
    }
  }

 

  
  

   
   
  
  






</script>

<style scoped>
.form-control{
 width: 300px; 
}

</style>