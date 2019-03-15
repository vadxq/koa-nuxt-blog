<template>
<section>
  <v-container>
    <h1>{{item.title}}</h1>
    <v-divider></v-divider>
    <v-layout row >
      <div v-html="item.content"></div>
    </v-layout>
  </v-container>
</section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    let { data } = await $axios.get(`https://blog.vadxq.com/api/admin/one/${params.id}`)
    if (data.status) {
      return { item: data.msg }
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
</style>

