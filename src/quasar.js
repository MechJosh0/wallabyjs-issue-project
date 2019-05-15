import Vue from 'vue';
import '@/styles/quasar.styl';
import 'quasar/dist/quasar.ie.polyfills';
import iconSet from 'quasar/icon-set/fontawesome-v5-pro.js';
import {
	Quasar,
	QBtn
} from 'quasar';

Vue.use(Quasar, {
	config: {},
	components: {
		QBtn
	},
	directives: { },
	plugins: { 	},
	iconSet
});
