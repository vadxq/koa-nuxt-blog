<template>
  <v-container fluid grid-list-sm>
    <h2 class="headline">Latest Posts</h2>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 class="post-card" v-for="item in list" :key="item._id">
        <v-hover>
          <!-- <v-card max-width="350"  slot-scope="{hover}"> -->
          <v-card max-width="350">
            <v-img
              class="white--text"
              height="200px"
              :src="item.coverimg"
            >
              <!-- <v-container fill-height  v-if="hover">
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span>{{item.description}}</span>
                  </v-flex>
                </v-layout>
              </v-container> -->
            </v-img>
            <v-card-title>
              <div>
                <h3 class=" mb-0">{{item.title}}</h3>
              </div>
              
              <div>
                <span class="grey--text itemdesc">{{ item.description }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="grey">{{item.createtime.slice(0,10)}}</v-btn>
              <v-btn flat color="grey">阅读：{{item.views}}</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon :href="'/article/' + item.url" target="_blank">
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-btn block color="blue-grey" to="/post" class="white--text">更 多</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  // async asyncData ({ $axios }) {
  //   let { data } = await $axios.get(`https://blog.vadxq.com/api/view/list`)
  //   if (data.status) {
  //     return { list: data.info }
  //   }
  // },
  data () {
    return {
      // list: []
    }
  },
  props: ['list']
}
</script>

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
  .itemdesc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    position: relative;
    max-height: 4.5rem;
    line-height: 1.5;
  }
  .itemdesc::before {
    content: '...';
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 1.5rem;
    background-color: white;
  }

  .itemdesc::after {
    content: '';
    display: inline-block;
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: white;
  }
</style>