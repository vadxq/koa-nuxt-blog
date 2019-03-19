<template>
<section>
  <v-container>
    <v-layout row>
      <v-flex d-flex xs8 sm8>
        <h1>文章列表</h1>
      </v-flex>
      <v-flex d-flex xs4 sm4>
        <v-btn flat color="success" @click="addArticle(4)">添加新文章</v-btn>
      </v-flex>
    </v-layout>
    
    <v-divider></v-divider>
    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 class="post-card" v-for="item in list" :key="item.url">
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
                <div class="editbtns">
                  <v-btn flat @click="editArticle(item.url, 0)" color="success">编辑</v-btn>
                  <v-btn v-if="!item.checked" flat color="info" @click="checkArticle(item.url, 1)">审核</v-btn>
                  <v-btn v-if="item.checked" flat color="warning" @click="backArticle(item.url, 2)">撤回</v-btn>
                  <v-btn flat color="error" @click="delArticle(item.url, 3)">删除</v-btn>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="grey">{{item.createtime.slice(0,10)}}</v-btn>
                
                
                <v-spacer></v-spacer>
                <v-btn icon :to="'/admin/article/' + item.url" target="_blank">
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog scrollable  v-model="isModel" persistent min-width="70vh">
      <v-card>
        <!-- <v-card-title>
          <span v-if="this.activeStatus == 0" class="headline">User Profile</span>
        </v-card-title> -->
        <v-card-text>
          <v-container fuild>
            <!-- <v-layout wrap> -->
              <div>
                <h4 v-if="this.activeStatus == 0" >编辑</h4>
                <h4 v-if="this.activeStatus == 4" >新增</h4>
              </div>
              <v-text-field v-model="article.url" label="url" required></v-text-field>
              <v-text-field v-model="article.title" label="title" required></v-text-field>
              <v-text-field v-model="article.description" label="description" required></v-text-field>
              <v-textarea v-model="article.description" label="description" required></v-textarea>
              <v-text-field v-model="article.coverimg" label="coverimg" required></v-text-field>
              <Edit  />
            <!-- </v-layout> -->
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="isModel = false">Close</v-btn>
          <v-btn v-if="this.activeStatus == 0" color="blue darken-1" flat @click="putMsg">提交</v-btn>
          <v-btn v-if="this.activeStatus == 4" color="blue darken-1" flat @click="postMsg">提交</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</section>
</template>

<script>
import Edit from '~/components/Edit'

export default {
  async asyncData ({ $axios }) {
    let { data } = await $axios.get('https://blog.vadxq.com/api/admin/list')
    if (data.status) {
      return { list: data.info }
    }
  },
  components: {
    Edit
  },
  data () {
    return {
      list: [],
      activeId: '',
      isModel: false,
      activeStatus: '', // 0,编辑。1审核，2撤回，3删除,4新文章
      article: {
        title: '',
        description: '',
        coverimg: '',
        url: ''
      }
    }
  },
  methods: {
    async getAdminList () {
      let res = await this.$axios.get('https://blog.vadxq.com/api/admin/list')
      if (res.data.status) {
        this.list = res.data.info
      }
    },
    async editArticle (id, status) {
      this.isModel = true
      this.activeId = id
      this.activeStatus = status
      this.article = {
        title: '',
        description: '',
        coverimg: '',
        url: ''
      }
      this.$store.commit('setContent', '')
      let res = await this.$axios.get(`https://blog.vadxq.com/api/view/one/${this.activeId}`)
      if (res.data.status) {
        this.article = res.data.msg
        this.$store.commit('setContent', this.article.content)
      }
    },
    async checkArticle (id, status) {
      this.isModel = true
      this.activeId = id
      this.activeStatus = status
      let res = await this.$axios.get(`https://blog.vadxq.com/api/admin/check/${this.activeId}`)
      if (res.data.status) {
        console.log(res.data)
      }
    },
    async backArticle (id, status) {
      this.isModel = true
      this.activeId = id
      this.activeStatus = status
      let res = await this.$axios.get(`https://blog.vadxq.com/api/admin/back/${this.activeId}`)
      if (res.data.status) {
        console.log(res.data)
      }
    },
    async delArticle (id, status) {
      this.isModel = true
      this.activeId = id
      this.activeStatus = status
      let res = await this.$axios.get(`https://blog.vadxq.com/api/admin/del/${this.activeId}`)
      if (res.data.status) {
        console.log(res.data)
      }
    },
    async addArticle(status) {
      this.isModel = true
      this.article = {
        title: '',
        description: '',
        coverimg: ''
      }
      this.$store.commit('setContent', '')
      this.activeStatus = status
    },
    async postMsg () {
      this.article.content = this.$store.state.content
      console.log(this.article)
      if (this.article.title && this.article.description && this.article.coverimg && this.article.content) {
        let res = await this.$axios.post(`https://blog.vadxq.com/api/admin/one`, this.article)
        if (res.data.status) {
          console.log(res.data)
          this.isModel = false
        }
      }
    },
    async putMsg () {
      this.article.content = this.$store.content
      if (this.article.title && this.article.description && this.article.coverimg && this.article.content && this.article.url) {
        let res = await this.$axios.put(`https://blog.vadxq.com/api/admin/one/${this.article.url}`)
        if (res.data.status) {
          console.log(res.data)
        }
      }
    }
  },
  mounted() {
    // this.getAdminList()
  },
}
</script>

<style scoped>
section {
  margin: 1rem 0;
}
.editbtns .v-btn {
  margin: 10px 0 -10px 0;
  min-width: 50px;
  min-height: 20px;
}
.v-card__text {
  min-height: 70vh;
}

</style>

