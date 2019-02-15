<template>
  <section>
    <Carousel />
    <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm8>
          <Postlist />
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
  }
}
</script>

<style scoped>
  
  .post-card {
    justify-content: center;
    margin: 20px 0;
  }
</style>
