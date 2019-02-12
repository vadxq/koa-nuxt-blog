<template>
  <section>
    <Carousel />
    <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm8>
          <PostList />
        </v-flex>
        <v-flex d-flex xs12 sm4 child-flex>
          <v-card color="orange lighten-2" tile flat>
            <v-card-text>sdsd</v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Carousel from '~/components/Carousel';
import PostList from '~/components/PostList';

export default {
  components: {
    Carousel,
    PostList
  }
}
</script>

<style scoped>
  
  .post-card {
    justify-content: center;
    margin: 20px 0;
  }
</style>
