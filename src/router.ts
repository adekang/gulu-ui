import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/Doc/SwitchDemo.vue';
import ButtonDemo from './components/Doc/ButtonDemo.vue';
import DialogDemo from './components/Doc/DialogDemo.vue';
import TabsDemo from './components/Doc/TabsDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';


const history = createWebHashHistory();
const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
export const router = createRouter({
  history: history,

  routes: [
    // 默认访问一级页面
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        //默认访问的二级页面
        {path: '', component: SwitchDemo},
        {path: 'intro', component: md('intro')},
        {path: 'get-started', component: md('get-started')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    },

  ]
});