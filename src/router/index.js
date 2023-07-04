import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import Stopwatch from '../components/Stopwatch.vue';
import WidgetBerita from '../components/WidgetBerita.vue';
import Transaksi from '../components/Transaksi.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: Stopwatch },
  { path: '/widgetberita', component: WidgetBerita },
  { path: '/transaksi', component: Transaksi },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
