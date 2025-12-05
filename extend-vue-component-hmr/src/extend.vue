<template>
  <div>
    <h1 @click="handleClick">test {{ test }}{{ test3 }}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { defineComponent, h, ref } from 'vue';

@Component({
  name: 'Test2',
})
class Test extends Vue {
  test = 'test1';
  get test3() {
    return 'test3';
  }
  handleClick() {
    this.test = 'tttt'
  }
}

export const Test2 = toNative(Test)
export default Test2
export const Test3 = defineComponent({
  data() {
    return {
      test: 'test2',
    }
  },
  render() {
    return h('div', this.test)
  }
})

export const extObj = {
  data() {
    return {
      test: 'test1'
    }
  },
  render() {
    return h('div', this.test)
  }
}
</script>
