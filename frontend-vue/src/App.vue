<template>
    <div>
    <v-toolbar>
        <v-spacer />
        <span v-if="$store.getters.logado">{{$store.getters.user}}</span>
        <template >
            <v-btn icon v-if="$store.getters.logado" @click="logoff()">
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </template>
    </v-toolbar>  
  <v-app>
    
    
    <v-container>
        <router-view></router-view>
    </v-container>
  </v-app>
    </div>
</template>
    
<script>

export default {
  name: "App",
  data: () => ({
    //
  }),
    methods: {
        logoff: function(){
            this.$store.commit('changeLog', false);
            this.$store.commit('changeUser', '');
            this.$router.replace('/')
        }
    },
    created(){
        if(!this.$store.getters.logado){
            this.$router.replace('/');
        }else{
            this.$router.replace('/Perfil');
        }
    }
};
</script>

<style scoped>
.container {
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 7%;
}
</style>