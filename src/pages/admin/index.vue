<template>
<section>
  <v-container>
    <h1>文章列表</h1>
    <v-divider></v-divider>
    <v-layout row >
      <v-list three-line>
        <template v-for="(item, index) in list">
          <v-subheader
            v-if="item.header"
            :key="item.header"
          >
            {{ item.header }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-tile
            v-else
            :key="item.title"
            avatar
            :href="'/admin/' + item._id"
          >
            <v-list-tile-avatar>
              <img :src="item.coverimg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>

      <!-- <v-list four-line>
        <v-list-tile avatar :href="'/admin/' + item._id" v-for="item in list" :key="item" fluid>
          <v-list-tile-avatar>
            <img :src="item.coverimg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list> -->
    </v-layout>
  </v-container>
</section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get(`http://blog.vadxq.com/api/view/list`)
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

<style scoped>
section {
  margin: 1rem 0;
}

</style>

