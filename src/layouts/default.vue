<template>
  <v-app>
  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
  <!-- <v-toolbar app></v-toolbar> -->
  <v-content>
    <v-container fluid id="openCon">
      <!-- <v-layout> -->
        <v-flex>
          <v-card light raised hover >
            <!-- 选项卡 -->
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
            <!-- 多图 -->
            <v-carousel hide-controls height="400">
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-flex>

        <v-hover>
           <v-container fluid grid-list-sm>
            <v-layout row wrap>
              <v-flex d-flex xs12 order-xs5>
                <v-layout column>
                  <v-flex d-flex>
                    <v-card color="blue-grey" dark tile flat>
                      <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex>
                    <v-card color="brown" dark tile flat>
                      <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex xs12 sm7>
                <v-layout row wrap>
                  <v-flex d-flex>
                    <v-card color="indigo lighten-2" dark tile flat>
                      <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex>
                    <v-layout row>
                      <v-flex
                        v-for="n in 2"
                        :key="n"
                        d-flex
                      >
                        <v-card
                          color="amber lighten-2"
                          tile
                          flat
                        >
                          <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex xs12 sm2 child-flex>
                <v-card color="orange lighten-2" tile flat>
                  <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12 sm3>
                <v-card color="red lighten-2" dark tile flat>
                  <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-hover>
      <!-- </v-layout> -->
      <!-- <router-view></router-view> -->
    </v-container>
  </v-content>
  <v-footer app>ddd</v-footer>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
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
.v-tabs {
  margin: 6px 0;
}
@media only screen and (max-width: 500px) {
  #openCon {
    padding: 5px!important;
  }
}
</style>

