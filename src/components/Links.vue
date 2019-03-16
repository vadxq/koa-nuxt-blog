<template>
  <v-container fluid>
    <h1>Links</h1>
    <v-divider></v-divider>
    <v-layout row >
      <v-list two-line>
        <v-list-tile avatar :href="item.url" v-for="item in items" :key="item._id" fluid>
          <v-list-tile-avatar>
            <img :src="item.icon">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.url }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "sccgithub",
          url: "https://github.com/sccgithub",
          desc: "scc,one good man",
          icon: "https://avatars2.githubusercontent.com/u/11674258?s=460&v=4"
        },
        {
          title: "lxxyx",
          url: "https://blog.lxxyx.cn/",
          desc: "lxxyx,one good man",
          icon: "https://avatars2.githubusercontent.com/u/13161470?s=460&v=4"
        },
        {
          title: "siliconx",
          url: "http://blog.imcoder.xyz",
          desc: "siliconx,one good man",
          icon: "https://avatars2.githubusercontent.com/u/26862350?s=460&v=4"
        },
        {
          title: "showzeng",
          url: "https://showzeng.itscoder.com",
          desc: "showzeng,one good man",
          icon: "https://avatars3.githubusercontent.com/u/15917469?s=460&v=4"
        },
        {
          title: "vvmint",
          url: "https://www.vvmint.cn/",
          desc: "vvmint,one good man",
          icon: "https://www.vvmint.cn/avatar/DestCropImage.png"
        },
        {
          title: "tyan-boot",
          url: "http://www.boot.pw",
          desc: "tyan-boot,one good man",
          icon: "https://avatars3.githubusercontent.com/u/4982027?s=460&v=4"
        },
        {
          title: "vibiu",
          url: "http://blog.vibiu.cn/",
          desc: "vibiu,one good man",
          icon: "https://qnimg.vadxq.com/blog/2017/vibiu.jpg"
        }
      ]
    };
  }
};
</script>

