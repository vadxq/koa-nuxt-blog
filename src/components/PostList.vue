<template>
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
                    <span>1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
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
              <v-btn icon>
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
                    <span>1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
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
              <v-btn icon>
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
                    <span>1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
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
              <v-btn icon>
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
                    <span>1,000 mfdfaknf fnasjn skfnasnk nasn asknfasj asn knasfnkasn na nas nasn asfmas mnasm nas masn nas faksfn asn masfm nasm asnmn afmasnjabf as nmsn miles of wonder</span>
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
              <v-btn icon>
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
    <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
  </v-container>
</template>


<style scoped>
  .blog-title {
    line-height: 28px !important;
    letter-spacing: normal !important;
    font-family: 'Roboto', sans-serif !important;
  }
  .post-card {
    justify-content: center;
    margin: 20px 0;
  }
</style>