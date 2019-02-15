<template>
  <v-container class="avatar-con" fluid grid-list-sm>
    <v-flex justify-center text-xs-center>
      <div class="avatar-img">
        <img src="https://qnimg.vadxq.com/blog/2016/blogheadimg20160517.jpg" alt="avatar">
      </div>
      <v-layout justify-center align-center row wrap class="avatar-detail">
        <h1>vadxq</h1>
        <p>vadxq,一个还是很菜很菜的前端小学童，努力学习知识中，欢迎大家一起探讨前端知识，当然主题不仅限于这些，生活啊，后台啊等等都可以一起探讨哦~~</p>
        <div>
          <v-btn color="grey" nuxt to="/me" round>about me more</v-btn>
        </div>
      </v-layout>
    </v-flex>
  </v-container>
</template>


<style scoped>
  .avatar-con {
    border: 1px solid grey;
    border-radius: 1.5rem;
    margin: 7vw 0 0 0;
  }
  .avatar-img {
    margin-top: -25%;
  }
  .avatar-img img {
    border-radius: 50%;
    width: 50%;
    display: inline-flex;
    max-width: 120px;
  }
  .avatar-detail h1 {
    margin: 15px auto;
  }
</style>