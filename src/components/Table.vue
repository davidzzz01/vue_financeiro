<template>
    <table class="table table-hover table-bordered table-striped table-condensed">
        <thead>
            <tr>
                <th class="bg-success text-light">ID</th>
                <th class="bg-success text-light">Nome</th>
                <th class="bg-success text-light">Descrição</th>
                <th class="bg-success text-light">Tipo</th>
                <th class="bg-success text-light">Categoria</th>
                <th class="bg-success text-light">Data</th>
                <th class="bg-success text-light">Valor(R$)</th>
                <th class="bg-success text-light">Ações</th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="registro in registros " :key="registro.id">
                <td>{{ registro.id }}</td>
                <td>{{ registro.nome_despesa }}</td>
                <td>{{ registro.descricao }}</td>
                <td :style="registro.class">{{ registro.tipo }}</td>
                <td class="text-center">{{ registro.categoria }}</td>
                <td style="text-align: center">{{ registro.data_br }}</td>
                <td class="valor">{{ registro.valor_br }}</td>
                <td class="d-flex justify-content-center align-items-center">
                <button class="btn btn-info d-flex align-items-center justify-content-center"  @click="$emit('editarRegistro', registro)"><i
                class="fa-solid fa-pencil"></i></button>
                <button class="btn btn-danger mt-2 " @click="deleteRegistro(registro.id)"> <i
                 class="fa-solid fa-trash"></i></button>
                </td>
            </tr>

        </tbody>
    </table>

</template>

<script>

export default {
    name: 'Table',
    props: {
        deleteRegistro: {
            Type: Function,
            required: true,
        },
        registros: {
            Type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.btn-danger{
width: 35px;
height: 35px;
align-content: center;
align-items: center;
margin-top: 3px;
}
.fa-trash{
color:white;
font-size: 18px;
margin-right:auto;
} 

.valor{
text-align: right;
}

td{
  height: 30px;
  vertical-align: middle;
}
fa-pencil{

color:white;
font-size: 18px;

}
.bg-success{
 text-align: center;
}

</style>