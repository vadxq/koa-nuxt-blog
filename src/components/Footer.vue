<template>
  <v-footer height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-1">
        <strong class="subheading">welcome to connect me!</strong>

        <v-spacer></v-spacer>

        <v-btn  dark icon href="mailto:dongxianlin@vadxq.com">
          <v-icon size="32" color="white">mail_outline</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/vadxq">
          <img src="@/assets/imgs/Github.png">
        </v-btn>
        <v-btn icon href="https://weibo.com/vadxq/">
          <img src="@/assets/imgs/weibo.png">
        </v-btn>
        <v-btn icon href="https://twitter.com/vadxq">
          <img src="@/assets/imgs/Twitter.png">
        </v-btn>
        <!-- <v-btn icon>
          <img src="@/assets/imgs/zhihu.png">
        </v-btn> -->
        <!-- <v-btn icon>
          <img src="@/assets/imgs/QQ.png">
        </v-btn> -->
        <v-btn icon href="https://space.bilibili.com/9857219">
          <img src="@/assets/imgs/bilibili.png">
        </v-btn>
        <!-- <v-btn icon>
          <img src="@/assets/imgs/Facebook.png">
        </v-btn> -->
      </v-card-title>

      <v-card-actions class="grey darken-10 justify-center">
        &copy;2019 —
        <strong>vadxq</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style scoped>
img {
  margin-top: -10%;
  display: inline-flex;
  width: 3.5rem;
}
</style>


