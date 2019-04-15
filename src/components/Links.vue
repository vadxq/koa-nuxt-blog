<template>
  <v-container fluid>
    <h1>Links</h1>
    <v-divider></v-divider>
    <v-layout row >
      <v-list two-line>
        <v-list-tile target="_blank" avatar :href="item.url" v-for="item in items" :key="item._id" fluid>
          <v-list-tile-avatar>
            <img :src="item.avtor">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.username }}</v-list-tile-title>
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
      ]
    };
  },
  methods: {
    async getURl () {
      let data = await this.$axios.get(`https://blog.vadxq.com/api/url/list`)
      if (data.data.status) {
        this.items = data.data.info
      }
    }
  },
  created () {
    this.getURl()
  },
};
</script>

