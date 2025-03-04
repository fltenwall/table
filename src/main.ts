// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import 'ant-design-vue/dist/antd.less';
import '@surely-vue/table/style';
import './index.less';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import SurelyTable, { setLicenseKey } from '@surely-vue/table';
import App from './App.vue';
import routes from './routes';
import i18n from './i18n';
import Antd from 'ant-design-vue/es';
import DemoBox from './components/DemoBox.vue';
import clipboard from './directives/clipboard';

setLicenseKey(
  'bd8e9bae80c43b524960987020b1f47dT1JERVI6MDAwMDEsRVhQSVJZPTMzMjI3NzEyMDAwMDAwLERPTUFJTj1zdXJlbHkuY29vbCxLRVlWRVJTSU9OPTE=',
);
const app = createApp(App);
app.use(i18n);
app.use(Antd);
app.use(clipboard);
app.use(
  createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: to => {
      if (to.hash) {
        return { el: to.hash, top: 200, behavior: 'auto' };
      } else {
        return { top: 0, behavior: 'auto' };
      }
    },
  }),
);
app.use(SurelyTable).mount('#app');
app.component('DemoBox', DemoBox);

app.config.globalProperties.$i18n = i18n;
