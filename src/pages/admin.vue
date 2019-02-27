<template>
<section>
  <v-container>
    <h1>文章列表</h1>
    <v-divider></v-divider>
    <v-layout row >
      <v-list two-line>
        <v-list-tile avatar :href="'/admin/' + item._id" v-for="item in list" :key="item" fluid>
          <v-list-tile-avatar>
            <img :src="item.coverimg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-container>
  <router-view></router-view>
</section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get(`http://115.159.83.44:7190/api/view/list`)
    if (data.status) {
      return { list: data.info }
    }
  },
  data () {
    return {
      list: []
    }
  }
}
</script>
