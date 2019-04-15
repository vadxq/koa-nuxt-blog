<template>
<section>
  <v-container>
    <h1>{{item.title}}</h1>
    <div>
      <span class="grey--text">{{item.createtime.slice(0,10)}}</span>
      <span class="grey--text"> 阅读：{{item.views}}</span>
      <span class="grey--text"> vadxq</span>
    </div>
    <v-divider></v-divider>
      <v-img aspect-ratio="1.5" :src="item.coverimg"></v-img>
    <v-layout row class="ql-container ql-snow">
      <div v-html="item.content" class="ql-editor"></div>
    </v-layout>
  </v-container>
</section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    let { data } = await $axios.get(`http://blog.vadxq.com/api/view/one/${params.id}`)
    if (data.status) {
      return { item: data.msg }
    }
  },
  head () {
    return {
      title: this.item.title + '-vadxq-清竹茶馆',
      meta: [
        { hid: 'description', name: 'description', content: `${this.item.description}-vadxq-清竹茶馆` },
        
        // { hid: 'keywords', name: 'keywords', content: `${this.articleMsg.abstract}` }
      ]
    }
  },
  data () {
    return {
      item: {}
    }
  },
  created () {

  }
}
</script>

<style scoped>
h1 {
  padding: 1rem 0;
}
.row {
  margin: 1rem 0;
}
.ql-container {
  border: none;
}
.v-image {
  max-height: 21rem;
}
.grey--text {
  margin: 0rem 0.2rem;
}
</style>

