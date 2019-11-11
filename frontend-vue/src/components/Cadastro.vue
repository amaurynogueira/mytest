<template>
  <v-container>
    <v-container>
      <v-alert v-model="showAlert" type="error" border="left" dismissible>{{ msgAPI }}</v-alert>
    </v-container>
    <br />
    <div class="entradas">
      <v-row>
        <v-text-field label="Nome completo" v-model="nome" />
      </v-row>

      <v-row>
        <v-text-field label="Email" v-model="email" type="email" />
      </v-row>

      <v-row>
        <v-text-field label="Usuário" v-model="usuario" />
      </v-row>

      <v-row>
        <v-text-field label="Senha" v-model="senha" type="password" />
      </v-row>

      <v-row>
        <v-text-field label="Confirmação de senha" type="password" v-model="confirmacaoSenha" />
      </v-row>
    </div>

    <div>
      <br />
      <v-row>
        <v-btn width="100%" color="success" @click="cadastraUsuario()">Cadastrar</v-btn>
      </v-row>
      <br />
      <v-row>
        <v-btn width="100%" outlined color="secundary" @click="redirect('/')">Voltar</v-btn>
      </v-row>
    </div>
  </v-container>
</template>
    
<script>
import axios from "axios";

export default {
  data() {
    return {
      nome: null,
      usuario: null,
      email: null,
      senha: null,
      confirmacaoSenha: null,
      showAlert: false,
      msgAPI: "Mensagem retornada da api"
    };
  },
  methods: {
        cadastraUsuario() {
      if (this.verificaCampos() && this.verificaSenha()) {
        let dadosJSON = {
          usuario: this.usuario,
          nome: this.nome,
          email: this.email,
          senha: this.senha
        };
        axios
          .post(
            "http://localhost/api_php/User/create.php",
            JSON.stringify(dadosJSON)
          )
          .then(response => {
            let resposta = response.data.msg;
            if (resposta.split(".")[0] == "Error") {
              this.msgAPI = resposta;
              this.showAlert = true;
            }
            alert(response.data.msg);
          })
          .catch(err => {
            this.msgAPI = err;
            this.showAlert = true;
          });
      }
    },

        verificaCampos() {
      if (this.nome == null) {
        this.msgAPI = "Dados obrigatórios";
        alert("Nome");
      } else if (this.email == null) {
        this.msgAPI = "Dados obrigatórios";
        alert("Email");
      } else if (this.usuario == null) {
        this.msgAPI = "Dados obrigatórios";
        alert("usuario");
      } else {
        this.msgAPI = "";
      }

      if (this.msgAPI == "Dados obrigatórios") {
        this.showAlert = true;
        return false;
      }
      return true;
    },

        verificaSenha() {
      if (
        this.senha !== this.confirmacaoSenha ||
        this.confirmacaoSenha == null ||
        this.senha == null
      ) {
        return false;
      }
      return true;
      /*let maiscula = 0;
      let minuscula = 0;
      let numero = 0; */
    },
      
        redirect(route){
            this.$router.replace(route);
        }
  }
};
</script>