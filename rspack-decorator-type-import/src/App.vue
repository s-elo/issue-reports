<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-facing-decorator';
import { TestType } from './type';

@Component
export default class TestCom extends Vue {
  @Prop({ type: Array, default: (): any[] => [] })
  private test?: TestType;

  mounted() {
    console.log(this.test)
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
