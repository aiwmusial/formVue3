import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import InputElement from "../InputElement.vue";


test('renders a todo', () => {
    const wrapper = mount(TodoApp)
  
    const todo = wrapper.get('[data-test="todo"]')
  
    expect(todo.text()).toBe('Learn Vue.js 3')
  })