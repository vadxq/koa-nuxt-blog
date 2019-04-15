<template>
  <v-container>
    <v-carousel  height="400">
      <a target="_blank" :href="item.url" v-for="(item,i) in items" :key="i">
        <v-carousel-item
          :src="item.cover"
        >
        </v-carousel-item>
      </a>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        ]
    }
  },
  methods: {
    async getItem () {
      let data = await this.$axios.get(`https://blog.vadxq.com/api/swaper/list`)
      if (data.data.status) {
        this.items = data.data.info
      }
    }
  },
  created() {
    this.getItem()
  },
}
</script>

