<template>
  <section class="error">
    <h1 class="error-title">
      {{ error.statusCode }}
    </h1>
    <h2 class="err-info">
      {{ error.message }}
    </h2>
    <nuxt-link class="error-button" to="/">
      主页
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error'],
  data () {
    return {}
  },
  mounted () {
    if (this.error.statusCode === 401) {
      this.error.message = '请返回主页重新登录'
    }
  }
}
</script>

<style scope>
.error {
  text-align: center;
  margin: 26vh 0;
}
.error-title {
  font-size: 50px;
  font-weight: bold;
  /* margin-top: 70px; */
}
.err-info {
  color: #666;
  font-weight: normal;
}
.error-button {
  /* margin: 45px; */
  font-size: 24px;
}
</style>