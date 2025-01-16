<template>
    <div>
      <div
        v-if="modal"
        class="modal fade show d-block"
        id="formModal"
        tabindex="-1"
        aria-labelledby="formModalLabel"
        aria-hidden="true"
        style="background: rgba(0, 0, 0, 0.5);"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="formModalLabel">Cadastrar Despesa</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addDespesa">
                <div class="mb-3">
                  <label for="nomeDespesa" class="form-label">Nome da Despesa</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nomeDespesa"
                    v-model="newRegistros.nome_despesa"
                    placeholder="Venda de equipamento"
                  />
                </div>
                <div class="mb-3">
                  <label for="descricao" class="form-label">Descrição</label>
                  <textarea
                    class="form-control"
                    id="descricao"
                    rows="3"
                    v-model="newRegistros.descricao"
                    placeholder="Venda de notebook usado"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="valor" class="form-label">Valor</label>
                  <input
                    type="number"
                    class="form-control"
                    id="valor"
                    v-model="newRegistros.valor"
                    placeholder="2000.00"
                    step="0.01"
                  />
                </div>
                <div class="mb-3">
                  <label for="tipo" class="form-label">Tipo</label>
                  <select class="form-select" id="tipo" v-model="newRegistros.tipo">
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="categoria" class="form-label">Categoria</label>
                  <input
                    type="text"
                    class="form-control"
                    id="categoria"
                    v-model="newRegistros.categoria"
                    placeholder="Venda"
                  />
                </div>
                <div class="mb-3">
                  <label for="data" class="form-label">Data</label>
                  <input
                    type="date"
                    class="form-control"
                    id="data"
                    v-model="newRegistros.data"
                    value="2024-10-07"
                  />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="closeModal">
                    Fechar
                  </button>
                  <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'FormModal',
    props: ['modal','closeModal', 'showRegistros'], 
    data() {
      return {
        newRegistros: {
          nome_despesa: '',
          descricao: '',
          valor: 0,
          tipo: '',
          categoria: '',
          data: '',
        },
      };
    },
    methods: {
    
      addDespesa() {
        axios
          .post('http://127.0.0.1:8000/api/despesas', this.newRegistros)
          .then((response) => {
            this.registros = response.data.registros; 
            this.closeModal(); 
            this.showRegistros();
          })
          .catch((error) => {
            console.error('Erro na requisição:', error);
          });
      },
    },
  };
  </script>
  