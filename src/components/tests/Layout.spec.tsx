import { mount } from '@vue/test-utils';
import Layout from '../../layouts/Layout.vue';

describe('Layout.vue', () => {
    // let wrapper;
    // const vuetify = createVuetify()
    // beforeEach(() => {
    const wrapper = mount(Layout, {
        props: {
            user: { name: 'Jan Musílek' }
        },
        // global: {
        //     plugins: [vuetify],
        // },
    });
    // });

    it('renders user name', () => {
        expect(wrapper.text()).toContain('Jan Musílek');
    });
});
