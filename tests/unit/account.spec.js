import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Account from '@/views/Account.vue'

describe('Account.vue', () => {
  it('renders welcome message', () => {
    const welcome_text = 'ACCOUNT DETAILS';
    const wrapper = shallowMount(Home, {});
    expect(wrapper.text()).to.include(welcome_text);
  });
});
