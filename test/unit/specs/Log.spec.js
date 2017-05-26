import Vue from 'vue'
import Log from '@/components/Log'

describe('Log.vue', () => {
  it('should render .ui.container', () => {
    const Constructor = Vue.extend(Log)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.ui.container'))
      .to.be.ok()
  })
})
