<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
</template>
<script lang="ts">
import { Vue, mixins, Component } from 'vue-facing-decorator';
import { State } from 'vuex-facing-decorator'

@Component
class Mix extends Vue {
  public count: number;
}

@Component
class Mix2 extends mixins(Mix) {
  @State('count') public count: number;
  created() {
    console.log('@Mixx', this.count, this)
  }
}

@Component
export default class TestCom extends mixins(Mix2) {
  created() {
    // console.log(this.count, this)
  }
  mounted() {
    // console.log(this.count, this)
  }
}
</script>
<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
