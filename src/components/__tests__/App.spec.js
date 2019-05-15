import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/components/App';
import SimpleButton from '@/components/ui/SimpleButton';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('@/components/App', () =>
{
	const wrapper = mount(App, { localVue });

	it('should display submit button compontent', () =>
	{
		expect(wrapper.find(SimpleButton).exists()).toBeTruthy();
	});
});
