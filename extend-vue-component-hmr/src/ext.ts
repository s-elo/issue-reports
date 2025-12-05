import { h } from 'vue';
import { Component, Vue, toNative } from 'vue-facing-decorator';

export const extObj1 = {
  data() {
    return {
      test: 'test2'
    }
  },
  render() {
    return h('div', this.test)
  }
}

@Component({
  // name: 'Test2',
})
class Test extends Vue {
  test = 'test1';
  get test3() {
    return 'test3';
  }
  handleClick() {
    this.test = 'tttt'
  }
  render() {
    return (
      h('div', this.test)
    )
  }
}

export const TestCom = toNative(Test);
