<template>
  <v-container>
    <v-alert type="error" border="left" dismissible v-model="showAlert">{{msgAlert}}</v-alert>

    <br />

    <div class="entradas">
      <v-row>
        <v-text-field label="Email" type="email" v-model="email" />
      </v-row>
      <v-row>
        <v-text-field label="Senha" type="password" v-model="senha" />
      </v-row>
    </div>

    <v-row>
      <v-btn width="100%" color="success" @click="do_authentication()">Entrar</v-btn>
    </v-row>
    <br />
    <v-row>
      <v-btn width="100%" outlined color="success" @click="redirect('/Cadastro')">Cadastrar-se</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: null,
      senha: null,
      msgAlert: "Campos obrigatórios",
      showAlert: false
    };
  },
  methods: {
    do_authentication() {
      if (this.verifica_campos()) {
        
          axios.post("http://localhost/api_php/User/auth.php", JSON.stringify({email: this.email, senha:this.senha}))
          .then( response => {
              let data = response.data;
              if( data.msg.split('.')[0] == "Error" ){
                  this.msgAlert = data.msg;
                    this.showAlert = true;
              }else{
                  this.$store.commit('changeLog', true);
                  this.$store.commit('changeUser', this.email);
                  
                  this.$router.replace('/Perfil')
              }
          }).catch(error => {
              this.msgAlert = error;
              this.showAlert = true;
          })
          
          
      }
    },
    verifica_campos() {
      if (this.email == null && this.senha == null) {
        this.msgAlert = "Campos obrigatórios";
        this.showAlert = true;
        return false;
      }
      return true;
    },
  
    redirect(route){
        this.$router.replace(route);
    }
  }
};
</script>

<style scoped>
.entradas {
  margin-bottom: 2em;
}
</style>