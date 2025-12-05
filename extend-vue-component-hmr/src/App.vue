<template>
  <div class="content">
    <h1>Rsbuild with Vue1</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <Test />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator';
import Test from './Test.vue';

@Component({
  components: {
    Test
  }
})
export default class App extends Vue {
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
