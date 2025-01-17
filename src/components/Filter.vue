<template>
        <form action="/" method="get" style="flex: 0 0 70%; margin-right: 15px;">
            <div class="row">
                <div class="col-md-6 col-sm-12 d-flex align-items-center">
                    <label class="form-label me-2 mt-2" for="produto"></label>
                    <input type="text" class="form-control me-2" name="produto" placeholder="Filtrar por nome">
                    <button type="submit" class="btn btn-primary d-flex align-items-center me-1" style="width: 40px; height:40px;">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button type="reset" class="btn btn-warning d-flex text-center align-items-center " style="width: 40px; height:40px;">
                        <i class="fa-solid fa-delete-left"></i>
                    </button>
                </div>
            </div>
        </form>
     <div style="flex: 0 0 30%;">
            <select  class="form-select" aria-label="Filtrar por categoria">
                <option selected>Filtre por tipo</option>
                <option value="registros.tipo" v-for="item in registros" :key="item.id"></option>

            </select>
        </div>
</template>

<script>
export default{
    name: 'Filter',
    props:{
        registros:{
            Type:Object,
            required:true, 
        }
    }
}
</script>

<style scoped>

</style>