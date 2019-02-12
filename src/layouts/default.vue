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
            <v-container>
              <v-carousel hide-controls height="400">
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                >
                </v-carousel-item>
              </v-carousel>
            </v-container>

            <v-container fluid>
            <v-layout row wrap>
              <v-flex d-flex xs12 sm8>
                <v-container fluid grid-list-sm>
                  <h2 class="headline">Latest Posts</h2>
                <v-layout row wrap>
                  <v-flex d-flex xs12 sm6 class="post-card">
                    <v-hover>
                      <v-card max-width="350" slot-scope="{ hover }">
                        <v-img
                          class="white--text"
                          height="200px"
                          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                          <v-container fill-height fluid v-if="hover">
                            <v-layout fill-height>
                              <v-flex xs12 align-end flexbox>
                                <span >1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas  mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-img>
                        <v-card-title>
                          <div>
                            <span>这是第一篇页面</span>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-btn flat color="grey">2019.02.16</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn icon >
                            <v-icon>keyboard_arrow_right</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>

                    </v-hover>
                  </v-flex>
                  <v-flex d-flex xs12 sm6 class="post-card">
                    <v-hover>
                      <v-card max-width="350" slot-scope="{ hover }">
                        <v-img
                          class="white--text"
                          height="200px"
                          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                          <v-container fill-height fluid v-if="hover">
                            <v-layout fill-height>
                              <v-flex xs12 align-end flexbox>
                                <span >1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas  mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-img>
                        <v-card-title>
                          <div>
                            <span>这是第一篇页面</span>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-btn flat color="grey">2019.02.16</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn icon >
                            <v-icon>keyboard_arrow_right</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>

                    </v-hover>
                  </v-flex>
                  <v-flex d-flex xs12 sm6 class="post-card">
                    <v-hover>
                      <v-card max-width="350" slot-scope="{ hover }">
                        <v-img
                          class="white--text"
                          height="200px"
                          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                          <v-container fill-height fluid v-if="hover">
                            <v-layout fill-height>
                              <v-flex xs12 align-end flexbox>
                                <span >1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas  mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-img>
                        <v-card-title>
                          <div>
                            <span>这是第一篇页面</span>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-btn flat color="grey">2019.02.16</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn icon >
                            <v-icon>keyboard_arrow_right</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>

                    </v-hover>
                  </v-flex>
                  <v-flex d-flex xs12 sm6 class="post-card">
                    <v-hover>
                      <v-card max-width="350" slot-scope="{ hover }">
                        <v-img
                          class="white--text"
                          height="200px"
                          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                          <v-container fill-height fluid v-if="hover">
                            <v-layout fill-height>
                              <v-flex xs12 align-end flexbox>
                                <span >1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas  mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-img>
                        <v-card-title>
                          <div>
                            <span>这是第一篇页面</span>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-btn flat color="grey">2019.02.16</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn icon >
                            <v-icon>keyboard_arrow_right</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>

                    </v-hover>
                  </v-flex>
                </v-layout>
                </v-container>
              </v-flex>
              <v-flex d-flex xs12 sm4 child-flex>
                <v-card color="orange lighten-2" tile flat>
                  <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                </v-card>
              </v-flex>
      
            </v-layout>
          </v-container>
          </v-card>
        </v-flex>

        <v-hover>
           
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
.post-card {
  justify-content: center;
  margin: 20px 0;
}
@media only screen and (max-width: 500px) {
  #openCon {
    padding: 5px!important;
  }
}
</style>

