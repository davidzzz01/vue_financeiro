<!-- EditForm.vue -->
<template>
    <div v-if="isModalOpen" class="modal fade show d-block" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true" style="background: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Editar Despesa</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editarRegistro">
              <!-- Campos do Formulário de Edição -->
              <div class="mb-3">
                <label for="nomeDespesa" class="form-label">Nome da Despesa</label>
                <input type="text" class="form-control" id="nomeDespesa" v-model="registro.nome_despesa" placeholder="Venda de equipamento" />
              </div>
              <!-- Outros campos do formulário de edição -->
              <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["isModalOpen", "closeModal", "registro"],
    methods: {
      editarRegistro() {
        axios
        .put(`http://127.0.0.1:8000/api/despesa/${id}`, this.editRegistros)
        .then(() => {
          this.closeModal();
          this.showRegistros(); 
        })
        .catch((error) => {
          console.error("Erro ao atualizar a despesa:", error);
        });
        console.log("Registro editado:", this.registro);
        this.closeModal(); 
      }
    }
  }
  </script>
  