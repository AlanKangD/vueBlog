import { createWebHistory, createRouter } from "vue-router";
import list from './components/list.vue';
import home from './components/home.vue';
import detail from './components/detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path: "/list", //스프링에서 url 파라미터 라고 생각하면됩니다
    component: list,
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/detail/:id",
    component: detail,
    children : [
        {
            path : "author",
            component : Author,
        },
        {
            path : "comment",
            component : Comment,
        }    
    ]
  },
  {
    path : "/:anything(.*)",
    component: home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 