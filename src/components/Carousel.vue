<template>
  <v-container>
    <v-carousel  height="400">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
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
      let data = this.$axios.get(`https://blog.vadxq.com/api/swaper/list`)
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

