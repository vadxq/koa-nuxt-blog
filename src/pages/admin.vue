<template>
  <v-container>
    <h1>文章列表</h1>
    <v-divider></v-divider>
    <v-layout row >
      <v-list two-line>
        <v-list-tile avatar :href="item.url" v-for="item in items" :key="item" fluid>
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
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://my-api/posts/${params.id}`)
    return { title: data.title }
  }
}
</script>
