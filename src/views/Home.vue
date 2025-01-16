<template>

  <Header />

  <div class="container mt-5 mb-5">
    <div class="row justify-content-center mb-4">

      <Card :indicadores="indicadores" />

    </div>

    <div class="d-flex align-items-center mb-3">
      <Filter :registros="registros" />
    </div>

    <Table :registros="registros" :deleteRegistro="deleteRegistro"  @editarRegistro="abrirModal"/>
    <div>
      <button class="btn btn-outline-primary" @click="openModal">Adicionar Despesa</button>  &nbsp;
      <button class="btn btn-outline-danger" @click="gerarPDF">Relatório em PDF</button>
    </div>
  </div>
  <FormModal  :modal="modal" :registros="registros"  :closeModal="closeModal" :showRegistros="showRegistros"/>
  <EditForm :isModalOpen="isEditModalOpen" :closeModal="closeModal" :registro="editRegistros" />
  <Footer />
</template>

<script>

import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Table from '../components/Table.vue'
import axios from "axios";
import http from '../services/http'
import Card from '../components/Card.vue';
import Filter from '../components/Filter.vue';
import FormModal from '../components/FormModal.vue';
import EditForm from '../components/EditForm.vue';

export default {
  components: { Header, Footer, Table, Card, Filter, FormModal ,  EditForm},
  data() {
    return {
      isModalOpen: false,
      registros: [],
      categorias: [],
      indicadores: [],
      modal: false
}
  },
  name: 'Home',
  methods: {
    async showRegistros() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/despesas');
        this.registros = response.data.registros
        this.indicadores = response.data.card;
        this.categorias = response.data.categorias;


      }
      catch (error) {
        console.log(error)
      }
    },
    async deleteRegistro(id) {
      try {
        const del = await axios.delete(`http://127.0.0.1:8000/api/despesa/${id}`);
        console.log('registro excluido com sucesso', del)
        this.showRegistros();

      }
      catch (error) {
        console.log(error, "Não foi possivel excluir o registro")
      }
    },

    async gerarPDF() {
      try {

        const response = await axios({
          url: 'http://127.0.0.1:8000/api/gerar-pdf',
          method: 'GET',
          responseType: 'blob'
        });


        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(response.data);
        link.setAttribute('download', 'relatorio.pdf');
        link.click();

      } catch (error) {
        console.error("Erro ao gerar pdf", error);
      }
    },
    openModal(){
    this.modal = true;
    },
    closeModal(){
     this.modal=false
    },
    abrirModal(registro) {
      this.editRegistros = { ...registro }; 
      this.isModalOpen = true;
    },
    fecharModal() {
      this.isModalOpen = false;
    }
    

    

  },
  mounted() {
    this.showRegistros();
  }

}


</script>
<style scoped>
.bg-success {
  text-align: center;
}







.btn-info {
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  margin-right: 5px;
}

.col-md-3 {
  height: 280px;
}
</style>