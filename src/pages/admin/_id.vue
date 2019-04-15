<template>
<section>
  <v-container>
    <h1>{{item.title}}</h1>
    <v-divider></v-divider>
    <v-img aspect-ratio="1.5" :src="item.coverimg"></v-img>
    <v-layout row class="ql-container ql-snow">
      <div v-html="item.content"  class="ql-editor"></div>
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
  mmiddleware: ['authenticated'],
  data () {
    return {
      item: {}
    }
  },
  methods: {
    async getItem() {
      let res = await $axios.get(`https://blog.vadxq.com/api/admin/one/${params.id}`)
      if (res.data.status) {
        this.item = this.data.msg
      }
    }
  },
  created () {
    // this.getItem()
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
</style>

