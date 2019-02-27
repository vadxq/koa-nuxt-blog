<template>
  <div>
    <!--警告框-->
    <div v-if="alertMsgs.status === 'error'" id="message-1" class="tools-message btn btn-danger">
      <i class="fa fa-times-circle" ></i> {{alertMsgs.msg}}
    </div>
    <div v-if="alertMsgs.status === 'info'" id="message-1" class="tools-message btn btn-success"> <i class="fa fa-check-circle" ></i> {{alertMsgs.msg}} </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      alertMsgs: {
        status: '',
        msg: ''
      }
    }
  },
  methods: {
    init () {
      setTimeout(() => {
        // this.alertMsg.status = ''
        // this.alertMsg.msg = ''
        let data = {
          status: '',
          msg: ''
        }
        this.$store.commit('setAlertMsg', data)
      }, 3000)
    },
    handleAuthUpdate () {
      this.alertMsgs = this.$store.state.alertMsg
      // this.init()
    }
  },
  created () {
    this.$store.watch((state) => (state.alertMsg), this.handleAuthUpdate)
  },
  computed: {
    // ...mapGetters ({
    //   alertMsg: this.$store.state.alertMsg
    // }),
    // getMsg () {
    //   return this.$store.state.alertMsg
    // }
  },
  watch: {
    // getMsg (data) {
    //   this.alertMsgs = data
    // },
    '$store.state.alertMsg': {
      handler: function () {
        this.alertMsgs = this.$store.state.alertMsg
        this.init()
      },
      deep: true
    }
  },
  mounted () {
    // this.init()
  }
}
</script>

<style>
</style>