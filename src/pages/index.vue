<template>
  <section>
    <Carousel />
    <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm8>
          <PostList />
        </v-flex>
        <v-flex xs12 sm4 child-flex>
          <Avatar />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Carousel from '~/components/Carousel';
import PostList from '~/components/PostList';
import Avatar from '~/components/Avatar';

export default {
  components: {
    Carousel,
    PostList,
    Avatar
  }
}
</script>

<style scoped>
  
  .post-card {
    justify-content: center;
    margin: 20px 0;
  }
</style>
