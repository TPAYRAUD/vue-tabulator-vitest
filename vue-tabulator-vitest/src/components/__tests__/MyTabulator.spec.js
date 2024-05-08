import {describe, expect, it} from 'vitest'

import {flushPromises, mount} from '@vue/test-utils';
import {nextTick} from 'vue';
import MyTabulator from "../MyTabulator.vue";

describe('MyTabulator', () => {
    it('renders properly', async () => {
        // when
        const wrapper = mount(MyTabulator, {});

        await nextTick();
        await flushPromises();
        await new Promise((resolve) => {
           setTimeout(resolve, 10000);
        });

        // then
        console.debug(wrapper.html());
        expect(wrapper.findAll('.data-test-ligne-tableau')).to.have.lengthOf(5);
    }, 15000);
})
