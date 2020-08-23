<template>
  <div class="home">
    <div class="test">
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import { Button, Form } from "vant";

@Component({
  name: "Home",
  components: {
    [Button.name]: Button,
    [Form.name]: Form
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.test {
  height: 300px;
  background: gray;
}
</style>
