<template>

    <v-container>
        <v-content >
            
            <v-container>
            
                <h1 class="centralizado">Bem-vindo!</h1>
                <br />
                <br />
                <v-container id="opcoes">
                    <v-row>
                        <v-btn width="100%" color="primary" @click="redirect('/Login')">Entrar</v-btn>
                    </v-row>
                    <br />
                    <v-row>
                        <v-btn width="100%" color="success" @click="redirect('/Cadastro')">Cadastrar-se</v-btn>
                    </v-row>
                </v-container>
            </v-container>
        </v-content>
    </v-container>

</template>
<script>
    export default{
        methods: {
            redirect(route){
                this.$router.push(route);
            }
        }
    }
</script>
<style scoped>

    .centralizado{
        text-align: center;
    }
    
</style>