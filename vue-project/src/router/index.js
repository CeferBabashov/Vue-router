import { createRouter, createWebHistory } from "vue-router";
import HomeVue from '../components/Home.vue'
import AddProductVue from '../components/AddProduct.vue'
import ProductListVue from '../components/ProductList.vue'
import LoginVue from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeVue,
    },
    {
      path : '/login',
      name : 'login',
      component  : LoginVue
    },
    {
      path : '/addproduct',
      name : 'AddProduct',
      component : AddProductVue
    },
    {
      path : '/productlist',
      name : 'productlist',
      component : ProductListVue
    }
  ],
});

export default router;
