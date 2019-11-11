import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Cadastro from "./components/Cadastro.vue";
import Perfil from "./components/Perfil.vue";

const routes = [
    { path:"/",         component: Home,     name:"Home"     },
    { path:"/Login",    component: Login,    name:"Login"    },
    { path:"/Cadastro", component: Cadastro, name:"Cadastro" },
    { path:"/Perfil",   component: Perfil,   name:"Perfil"   }
];

export default routes;