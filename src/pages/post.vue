<template>
  <v-container grid-list-sm>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 class="post-card" v-for="item in list" :key="item._id">
        <v-hover>
          <v-card slot-scope="{hover}">
            <v-img
              class="white--text"
              height="200px"
              :src="item.coverimg"
            >
              <v-container fill-height  v-if="hover">
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span>{{item.description}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span>{{item.title}}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="grey">{{item.createtime.slice(0,10)}}</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon :href="'/article/' + item.url" target="_blank">
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get(`https://blog.vadxq.com/api/view/list`)
    if (data.status) {
      return { list: data.info }
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
.display-1 {
  font-size: 1.2rem!important;
}
.lighten-1 {
  padding: 6px 16px;
}
.v-timeline-item__body .xs8 p{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 0;
}
.v-timeline {
  padding-top: 5px;
}
.blog-title {
  line-height: 28px !important;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}
.post-card {
  justify-content: center;
  margin: 1rem 0;
}
.container.grid-list-sm .layout .flex {
  padding: 0 1rem;
}
</style>

