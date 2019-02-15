<template>
  <v-app>
  <v-content>
    <v-container fluid id="openCon">
        <v-flex>
          <v-card light raised hover >
            <v-container>
              <h1 class="blog-title text-xs-center">清 竹 茶 馆</h1>
              <h6 class=" grey--text text-xs-center">welcome to vadxq blog</h6>
            </v-container>

              <v-tabs fixed-tabs>
                <v-tab nuxt to="/">
                  <v-icon>home</v-icon>
                </v-tab>
                <v-tab nuxt to="/post">
                  posts
                </v-tab>
                <v-tab nuxt to="/me">
                  me
                </v-tab>
              </v-tabs>
              <v-divider></v-divider>
            <nuxt/>
            <Footer />
          </v-card>
        </v-flex>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import Footer from '~/components/Footer';
export default {
  components: {
    Footer
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.blog-title {
  line-height: 28px !important;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}

@media only screen and (max-width: 500px) {
  #openCon {
    padding: 5px!important;
  }
}
</style>

