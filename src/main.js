import Vue from 'vue';
import SimpleButton from '@/components/ui/SimpleButton';
import '@/quasar';
import App from '@/components/App';

Vue.component('SimpleButton', SimpleButton);

const app = new Vue({
	...App
}).$mount('#app');

export { app };
