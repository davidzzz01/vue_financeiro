<template>
    <div class="d-flex mb-3">

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
            <select class="form-select" aria-label="Filtrar por tipo" v-model="tipoFiltro">
                <option value="" selected>Filtre por tipo</option>
                <option
                    v-for="(tipo, index) in [...new Set(registros.map((item) => item.tipo))]"
                    :key="index"
                    :value="tipo"
                >
                    {{ tipo }}
                </option>
            </select>
        </div>
    </div>


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
            <th  style="width:90px" class="bg-success text-light">Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="registro in registrosFiltrados" :key="registro.id">
            <td>{{ registro.id }}</td>
            <td>{{ registro.nome_despesa }}</td>
            <td>{{ registro.descricao }}</td>
            <td :style="registro.class">{{ registro.tipo }}</td>
            <td class="text-center">{{ registro.categoria }}</td>
            <td style="text-align: center">{{ registro.data_br }}</td>
            <td class="valor">{{ registro.valor_br }}</td>
            <td style="width:90px" class="d-flex justify-content-center align-items-center">

<!--                   <button class="btn btn-info d-flex align-items-center justify-content-center" @click="$emit('editarRegistro', registro)">-->
<!--                        <i class="fa-solid fa-pencil"></i>-->
<!--                    </button>-->
<!--                    <button class="btn btn-danger d-flex align-items-center justify-content-center ml-2" @click="deleteRegistro(registro.id)">-->
<!--                        <i class="fa-solid fa-trash"></i>-->
<!--                    </button>-->
                <div class="menu-container">
                    <button class="menu-btn" @click="toggleMenu(registro.id)">⋮</button>
                    <div class="menu-options" v-if="menuOpen === registro.id">
                        <a @click="deleteRegistro(registro.id)" style="color:red">
                            <i class="fa-solid fa-trash"></i> Excluir
                        </a>
                        <a @click="$emit('editarRegistro', registro)" style="color:#2dabd1">
                            <i class="fa-solid fa-pencil"></i> Editar
                        </a>
                    </div>
                </div>


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
            type: Function,
            required: true,
        },
        registros: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            tipoFiltro: '',
            menuOpen:null

        };
    },
    methods:{
        toggleMenu(id) {
            this.menuOpen = this.menuOpen === id ? null : id;
        }
    },

    computed: {

        registrosFiltrados() {
            if (!this.tipoFiltro) {
                return this.registros;
            }
            return this.registros.filter(registro => registro.tipo === this.tipoFiltro);
        },
    },
};
</script>

<style scoped>



.fa-trash {
    color: red;
    font-size: 13px;
    margin-right: auto;
}

.valor {
    text-align: right;
}

td {
    height: 30px;
    vertical-align: middle;
}

.fa-pencil {
    font-size: 13px;
    color: #2dabd1;

}

.bg-success {
    text-align: center;
}
.menu-container {
    position: relative;
    display: inline-block;
}


.menu-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}


.menu-options {
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 150px;
    z-index: 1000;
}

.menu-options a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
    font-size: 14px;
}

.menu-options a:hover {
    background-color: #f0f0f0;
}


</style>
