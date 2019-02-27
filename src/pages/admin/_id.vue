<template>
<section>
  <v-container>
    <h1>{{item.title}}</h1>
    <v-divider></v-divider>
    <v-layout row >
      <v-list two-line>
        <v-list-tile avatar>
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
</section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    let { data } = await $axios.get(`http://115.159.83.44:7190/api/view/one/${params.id}`)
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

</style>

