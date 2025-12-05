<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { Test2, Test3, extObj } from './extend.vue';
import { h } from 'vue';
import { extObj1, TestCom } from './ext';

// const extObj = {
//     data() {
//       return {
//         test: 'test1'
//       }
//     },
//     render() {
//       return h('div', this.test)
//     }
//   }

@Component({
  extends: Test2,
})
export default class Test extends Vue {
  regionConfig: any = {
    a: true,
  };
  created() {
    console.log(this)
  }
}

</script>
