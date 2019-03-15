<template>
  <section>
    <Carousel />
    <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm8>
          <Postlist :list=list />
        </v-flex>
        <v-flex xs12 sm4 child-flex>
          <Avatar />
          <br>
          <Links />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Carousel from '~/components/Carousel';
import Postlist from '~/components/Postlist';
import Avatar from '~/components/Avatar';
import Links from '~/components/Links';

export default {
  components: {
    Carousel,
    Postlist,
    Avatar,
    Links
  },
  async asyncData ({ $axios }) {
    let { data } = await $axios.get(`https://blog.vadxq.com/api/view/list`)
    if (data.status) {
      if (data.info.length > 6) {
        return { list: data.info.slice(0,6)}
      } else {
        return { list: data.info }
      }
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
  
  .post-card {
    justify-content: center;
    margin: 20px 0;
  }
</style>
